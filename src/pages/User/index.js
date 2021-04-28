import React, { useEffect, useState } from "react";
import Modal from "../../components/General/Modal";
import Signup from "../../components/Form/Signup";

const API_HOST = "http://localhost:8000/api/v1";
const USER_API_URL = `${API_HOST}/users`;

function User() {
  const [isAdd, setIsAdd] = useState(false);
  const [data, setData] = useState([]);
  const showConfirmModal = () => {
    setIsAdd(true);
  };
  const fetchUser = () => {
    let obj = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTAxNWE4NDQ0ODAyMmY1MGM1OGJlNSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxOTQwNjU4MiwiZXhwIjoxNjIxOTk4NTgyfQ.3KPQ4q7RJDJMCoxTHB6YXCEDXoOCADRhKKfUhvIaScY",
      },
    };

    fetch(`${USER_API_URL}`, obj)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(setData(responseData.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [role, setRole] = useState(null);

  /**
   *
   * @param id - The id of the product
   * @param currentEmail
   * @param currentPassword
   * @param currentRole - The current unit price of the product
   */
  const onEdit = ({ id, currentEmail, currentPassword, currentRole }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });
    setEmail(currentEmail);
    setPassword(currentPassword);
    setRole(currentRole);
  };

  /**
   *
   * @param id
   * @param newEmail
   * @param newPassword
   * @param newRole
   */
  const updateUser = ({ id, newEmail, newPassword, newRole }) => {
    fetch(`${USER_API_URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        email: newEmail,
        password: newPassword,
        role: newRole,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTAxNWE4NDQ0ODAyMmY1MGM1OGJlNSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxOTQwNjU4MiwiZXhwIjoxNjIxOTk4NTgyfQ.3KPQ4q7RJDJMCoxTHB6YXCEDXoOCADRhKKfUhvIaScY",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // reset inEditMode and unit price state values
        onCancel();

        // fetch the updated data
        fetchUser();
      });
  };

  /**
   *
   * @param id -The id of the product
   * @param newEmail
   * @param newPassword
   * @param newRole  - The new unit price of the product
   */
  const onSave = ({ id, newEmail, newPassword, newRole }) => {
    updateUser({ id, newEmail, newPassword, newRole });
  };

  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
      rowKey: null,
    });
    // reset the unit price state value
    setEmail(null);
    setPassword(null);
    setRole(null);
  };
  const closeConfirmModal = () => {
    setIsAdd(false);
  };

  return (
    <div className="content">
      <Modal closeConfirmModal={closeConfirmModal} show={isAdd}>
        <Signup />
      </Modal>
      <div className="container-fluid pt-3">
        <div className="card strpied-tabled-with-hover">
          <div className="card-header ">
            <h4 className="card-title">Userlist</h4>
          </div>
          <br />

          <div className="card-body table-full-width table-responsive">
            <button className="button" onClick={showConfirmModal}>
              Add User
            </button>
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={item.id + "" + i}>
                    <td>
                      {inEditMode.status && inEditMode.rowKey === item.id ? (
                        // <input value={product_name} onChange={(event) => setPassword(event.target.value)} />
                        <input
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      ) : (
                        item.email
                      )}
                    </td>
                    <td>
                      {inEditMode.status && inEditMode.rowKey === item.id ? (
                        // <input value={product_category} onChange={(event) => setRole(event.target.value)}/>
                        <input
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      ) : (
                        item.name
                      )}
                    </td>
                    <td>
                      {inEditMode.status && inEditMode.rowKey === item.id ? (
                        <input
                          value={role}
                          onChange={(event) => setRole(event.target.value)}
                        />
                      ) : (
                        item.role
                      )}
                    </td>

                    <td>
                      {inEditMode.status && inEditMode.rowKey === item.id ? (
                        <React.Fragment>
                          <button
                            className={"btn-success"}
                            onClick={() =>
                              onSave({
                                id: item.id,
                                newEmail: email,
                                newPassword: password,
                                newRole: role,
                              })
                            }
                          >
                            Save
                          </button>

                          <button
                            className={"btn-secondary"}
                            style={{ marginLeft: 8 }}
                            onClick={() => onCancel()}
                          >
                            Cancel
                          </button>
                        </React.Fragment>
                      ) : (
                        <button
                          className={"btn-primary"}
                          onClick={() =>
                            onEdit({
                              id: item.id,
                              currentEmail: item.email,
                              currentPassword: item.password,
                              currentRole: item.role,
                            })
                          }
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
