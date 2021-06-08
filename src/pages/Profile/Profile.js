import React, { useContext, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import face3 from "../../assets/images/logo.svg";
import { getUser } from "../../api/userAPI";

const Profile = () => {
  const ctx = useContext(UserContext);
  const [user, setUser] = useState({ email: "", name: "" });
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const fetchData = () => {
    // if(ctx.state.role==="treasury")
    fetch(`http://localhost:8000/api/v1/users/${ctx.state.userId}/fossil`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        // setData(responseData.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchUser = () => {
    let obj = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + ctx.state.token,
      },
    };

    fetch(`http://localhost:8000/api/v1/users/${ctx.state.userId}`, obj)
      .then((response) => response.json())
      .then((responseData) => {
        const data = { ...responseData.data };
        setUser({
          name: data.name,
          email: data.email,
        });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    // getUser(ctx.state.userId).then((res) => setUser(res));
    fetchUser();
    fetchData();

    return () => {
      setUser(null);
    };
  }, [ctx.state.token]);

  const itemsData = useMemo(() => {
    let computedItems = data;
    if (search) {
      computedItems = computedItems.filter((item) =>
        item.catalog_no.toLowerCase().includes(search.toLowerCase())
      );
    }
    return computedItems;
  }, [data, search]);

  function handleSubmit(event) {
    console.log(user);
    console.log(ctx.state.logginIn);
    // event.preventDefault();
    // console.log("Updated your profile");
  }
  // onSubmit(data);
  return (
    <div className="content">
      <div className="columns">
        <div className="container profile">
          <div className="section profile-heading">
            <div className="columns is-mobile is-multiline">
              <div className="column is-2">
                <span className="header-icon user-profile-image">
                  <img alt="" src={face3} />
                </span>
              </div>
              <div className="column is-4-tablet is-10-mobile name">
                <span className="title is-bold">{user.name}</span>
                <br />
                {/* <div
                  className="button is-primary is-outlined"
                  onClick={handleSubmit}
                  id="edit-preferences"
                  style={{ margin: "5px 0" }}
                >
                  Edit Preferences
                </div>
                <br /> */}

                <p className="tagline">{user.email}</p>
              </div>
              <div className="column is-2-tablet is-4-mobile has-text-centered">
                <p className="stat-val">{data.length}</p>
                <p className="stat-key">нийт бүртгэл</p>
              </div>
              {/* <div className="column is-2-tablet is-4-mobile has-text-centered">
                <p className="stat-val">10</p>
                <p className="stat-key">likes</p>
              </div>
              <div className="column is-2-tablet is-4-mobile has-text-centered">
                <p className="stat-val">3</p>
                <p className="stat-key">lists</p>
              </div> */}
            </div>
          </div>
          <div className="profile-options is-fullwidth">
            <div className="tabs is-fullwidth is-medium">
              <ul>
                <li className="link is-active">
                  <a>
                    <span className="icon">
                      <i className="fa fa-list"></i>
                    </span>
                    <span>My Lists</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="box" style={{ borderRadius: 0 }}>
            <div className="columns">
              <div className="column is-2-tablet user-property-count has-text-centered">
                {/* <p className="subtitle is-5">
                  <strong>123</strong>
                  <br />
                  total properties
                </p> */}
              </div>
              <div className="column is-8">
                <input
                  className="input"
                  placeholder="Search your liked properties"
                  style={{ width: "100% !important" }}
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="columns is-mobile">
            {itemsData.map((e, i) => (
              <div key={e + i} className="column is-3-tablet is-6-mobile">
                <div className="card">
                  {/* {e.image && (
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img
                          alt=""
                          src={require(`../../backend-complete/public/upload/${e.image}`)}
                        />
                      </figure>
                    </div>
                  )} */}

                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark subtitle">
                        {e.branch_name}
                      </span>
                      <p>{e.catalog_no}</p>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <Link
                      className="card-footer-item"
                      to={`detailed-item/${e._id}/fossil`}
                    >
                      View
                    </Link>
                    <a className="card-footer-item">Share</a>
                  </footer>
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
