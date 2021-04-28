import React from "react";
import { Link } from "react-router-dom";
import face3 from "../../assets/images/logo.svg";

const Profile = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Updated your profile");
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
                <p>
                  <span className="title is-bold">Admin</span>
                  <br />
                  <a
                    className="button is-primary is-outlined"
                    href="#"
                    id="edit-preferences"
                    style={{ margin: "5px 0" }}
                  >
                    Edit Preferences
                  </a>
                  <br />
                </p>
                <p className="tagline">Munkhuu@gmail</p>
              </div>
              <div className="column is-2-tablet is-4-mobile has-text-centered">
                <p className="stat-val">30</p>
                <p className="stat-key">searches</p>
              </div>
              <div className="column is-2-tablet is-4-mobile has-text-centered">
                <p className="stat-val">10</p>
                <p className="stat-key">likes</p>
              </div>
              <div className="column is-2-tablet is-4-mobile has-text-centered">
                <p className="stat-val">3</p>
                <p className="stat-key">lists</p>
              </div>
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
                <li className="link ">
                  <a>
                    <span className="icon">
                      <i className="fa fa-thumbs-up"></i>
                    </span>
                    <span>My Likes</span>
                  </a>
                </li>
                <li className="link">
                  <a>
                    <span className="icon">
                      <i className="fa fa-search"></i>
                    </span>
                    <span>My Searches</span>
                  </a>
                </li>
                <li className="link">
                  <a>
                    <span className="icon">
                      <i className="fa fa-balance-scale"></i>
                    </span>
                    <span>Compare</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="box" style={{ borderRadius: 0 }}>
            <div className="columns">
              <div className="column is-2-tablet user-property-count has-text-centered">
                <p className="subtitle is-5">
                  <strong>123</strong>
                  <br />
                  total properties
                </p>
              </div>
              <div className="column is-8">
                <p className="control has-addons">
                  <input
                    className="input"
                    placeholder="Search your liked properties"
                    style={{ width: "100% !important" }}
                    type="text"
                  />
                  <button className="button">Search</button>
                </p>
              </div>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column is-3-tablet is-6-mobile">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img alt="" src={require("../../assets/pageImg/f1.jpg")} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <span className="tag is-dark subtitle">#1</span>
                    <p>Personal Notes on the Property</p>
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item">Compare</a>
                  <a className="card-footer-item">Share</a>
                  <a className="card-footer-item">Delete</a>
                </footer>
              </div>
              <br />
            </div>
            <div className="column is-3-tablet is-6-mobile">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img alt="" src={require("../../assets/pageImg/f2.jpg")} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <span className="tag is-dark subtitle">#2</span>
                    <p>Personal Notes on the Property</p>
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item">Compare</a>
                  <a className="card-footer-item">Share</a>
                  <a className="card-footer-item">Delete</a>
                </footer>
              </div>
              <br />
            </div>
            <div className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img alt="" src={require("../../assets/pageImg/f3.jpg")} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <span className="tag is-dark subtitle">#3</span>
                    <p>Personal Notes on the Property</p>
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item">Compare</a>
                  <a className="card-footer-item">Share</a>
                  <a className="card-footer-item">Delete</a>
                </footer>
              </div>
              <br />
            </div>
            <div className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img alt="" src={require("../../assets/pageImg/f4.jpg")} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <span className="tag is-dark subtitle">#4</span>
                    <p>Personal Notes on the Property</p>
                  </div>
                </div>
                <footer className="card-footer">
                  <a className="card-footer-item">Compare</a>
                  <a className="card-footer-item">Share</a>
                  <a className="card-footer-item">Delete</a>
                </footer>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
