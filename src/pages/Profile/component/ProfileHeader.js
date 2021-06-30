import React from "react";
import face3 from "../../../assets/images/logo.svg";

export default function ProfileHeader(props) {
  return (
    <div>
      <div className="section profile-heading">
        <div className="columns is-mobile is-multiline">
          <div className="column is-2">
            <span className="header-icon user-profile-image">
              <img alt="" src={face3} />
            </span>
          </div>
          <div className="column is-4-tablet is-10-mobile name">
            <span className="title is-bold">{props.name}</span>
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

            <p className="tagline">{props.email}</p>
          </div>
          <div className="column is-2-tablet is-4-mobile has-text-centered">
            <p className="stat-val">{props.length}</p>
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
    </div>
  );
}
