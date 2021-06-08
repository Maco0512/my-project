import React, { useEffect, useState, useContext } from "react";
import UserContext, { UserStore } from "../../context/UserContext";

import Modal from "../../components/General/Modal";
import Signup from "../../components/subRegistration/Signup";
import Select from "../../components/General/MultiSelect";

import { deleteUser, changePassword, resetPassword } from "../../api/userAPI";
const API_HOST = "http://localhost:8000/api/v1";
const USER_API_URL = `${API_HOST}/users`;

function User() {
  const ctx = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);

  const [isAdd, setIsAdd] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const showConfirmModal = () => {
    setIsAdd(true);
  };
  const fetchUsers = () => {
    let obj = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + ctx.state.token,
      },
    };
    fetch(`${USER_API_URL}`, obj)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, [isLoading, ctx.state.saving]);

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [role, setRole] = useState(null);

  const onPasswordChange = async ({ email }) => {
    let token = null;
    let password = prompt("Please enter your password");
    await changePassword(email).then((e) =>
      resetPassword(e.resetToken, password).then((e) =>
        console.log("Амжилттай солилооо")
      )
    );

    // if (password != null && token != null)
    //   await resetPassword(password, token).then((e) =>
    //     console.log("Амжилттай солилооо")
    //   );
  };
  const onDelete = ({ id }) => {
    // const result = confirmAlert({
    //   title: "Та устгах гэж байна",
    //   message: "Үүнийг хийнэ гэдэгтээ итгэлтэй байнуу",
    //   buttons: [
    //     {
    //       label: "Yes",
    //       onClick: () => true,
    //     },
    //     {
    //       label: "No",
    //       onClick: () => false,
    //     },
    //   ],
    // });
    // if (result) {
    //   await deleteUser(id, ctx.state.token).then((res) => setIsLoading(true));
    //   // Сonfirmation confirmed
    // } else {
    //   // Сonfirmation not confirmed
    // }
  };
  /**
   *
   * @param id - The id of the product
   * @param currentEmail
   * @param currentName
   * @param currentRole - The current unit price of the product
   */
  const onEdit = ({ id, currentEmail, currentName, currentRole }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });
    setEmail(currentEmail);
    setName(currentName);
    setRole(currentRole);
  };

  /**
   *
   * @param id
   * @param newEmail
   * @param newName
   * @param newRole
   */
  const updateUser = ({ id, newEmail, newName, newRole }) => {
    fetch(`${USER_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        email: newEmail,
        name: newName,
        role: newRole,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + ctx.state.token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // reset inEditMode and unit price state values
        onCancel();
        // fetch the updated data
        fetchUsers();
      })
      .catch((e) => console.log(e));
  };

  /**
   *
   * @param id -The id of the product
   * @param newEmail
   * @param newName
   * @param newRole  - The new unit price of the product
   */
  const onSave = ({ id, newEmail, newName, newRole }) => {
    // console.log(id, newEmail, newName, newRole)
    updateUser({ id, newEmail, newName, newRole });
  };

  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
      rowKey: null,
    });
    // reset the unit price state value
    setEmail(null);
    setName(null);
    setRole(null);
  };
  const closeConfirmModal = () => {
    setIsAdd(false);
  };
  const changeBranch = (e) => {};

  return (
    <div className="content">
      <Modal closeConfirmModal={closeConfirmModal} show={isAdd}>
        <Signup />
      </Modal>
      <div className="container pt-3">
        <div className="card strpied-tabled-with-hover">
          <div className="card-header ">
            <p className="card-header-title">Хэрэглэгчийн жагсаалт</p>
          </div>
          <div className="card-content">
            {/* <button className="button" onClick={showConfirmModal}>
              Add User
            </button> */}
            <span
              className="icon-text has-text-success"
              onClick={showConfirmModal}
            >
              <span className="icon is-medium">
                <i className="fas fa-user-plus fa-lg"></i>
              </span>
              <span>Add user</span>
            </span>
            {error && (
              <div
                className="notification is-warning  "
                style={{
                  color: "red",
                  padding: "0rem 2.5rem 0rem 2rem",
                }}
              >
                {error}
              </div>
            )}

            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th>И-мейл</th>
                  <th>Нэр</th>
                  <th>Үүрэг</th>
                  <th>Хариуцсан салбар</th>
                  <th>Үйлдлүүд</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={item._id + "" + i}>
                    <td>
                      {inEditMode.status && inEditMode.rowKey === item._id ? (
                        // <input value={product_name} onChange={(event) => setPassword(event.target.value)} />
                        <input
                          className="input is-small"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      ) : (
                        item.email
                      )}
                    </td>
                    <td>
                      {inEditMode.status && inEditMode.rowKey === item._id ? (
                        // <input value={product_category} onChange={(event) => setRole(event.target.value)}/>
                        <input
                          className="input is-small"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      ) : (
                        item.name
                      )}
                    </td>
                    <td>
                      {inEditMode.status && inEditMode.rowKey === item._id ? (
                        <input
                          className="input is-small"
                          value={role}
                          onChange={(event) => setRole(event.target.value)}
                        />
                      ) : (
                        item.role
                      )}
                    </td>
                    <td>
                      {inEditMode.status && inEditMode.rowKey === item._id ? (
                        <Select changeBranch={changeBranch} />
                      ) : item.branch ? (
                        item.branch.map((e, i) => (
                          <p key={e + i}>
                            {e}
                            <br />
                          </p>
                        ))
                      ) : (
                        "Бүгд"
                      )}
                    </td>

                    <td>
                      {inEditMode.status && inEditMode.rowKey === item._id ? (
                        <React.Fragment>
                          <button
                            className="button is-primary is-small"
                            onClick={() =>
                              onSave({
                                id: item._id,
                                newEmail: email,
                                newName: name,
                                newRole: role,
                              })
                            }
                          >
                            Save
                          </button>

                          <button
                            className="button is-danger is-light is-small"
                            style={{ marginLeft: 8 }}
                            onClick={() => onCancel()}
                          >
                            Cancel
                          </button>
                        </React.Fragment>
                      ) : (
                        <button
                          className="button is-success is-light is-small"
                          onClick={() =>
                            onEdit({
                              id: item._id,
                              currentEmail: item.email,
                              currentName: item.name,
                              currentRole: item.role,
                            })
                          }
                        >
                          Edit
                        </button>
                      )}
                      <button
                        style={{ marginLeft: "5px" }}
                        className="button is-danger is-light is-small"
                        onClick={() =>
                          onDelete({
                            id: item._id,
                          })
                        }
                      >
                        Delete
                      </button>
                      <button
                        className="button is-primary is-inverted is-small"
                        onClick={() =>
                          onPasswordChange({
                            email: item.email,
                          })
                        }
                      >
                        Нууц үг солих
                      </button>
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
