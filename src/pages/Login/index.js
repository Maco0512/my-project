import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./style.module.css";
import LoginForm from "./Login";
export default function Login() {
  const clicked = () => {
    // console.log("clicked");
    // <Redirect to="/dashboard" />;
  };

  return (
    <div>
      <section className="section">
        <div className="hero">
          <div className="hero-body">
            <div className={css.Content + " card"}>
              <br />
              <br />
              <div className="columns">
                <div className="column is-7">
                  <div className="navbar-brand" style={{ marginTop: "-40px" }}>
                    <Link to="/" className="navbar-item">
                      <img
                        src={require("../../assets/pageImg/logo.png")}
                        alt="Logo"
                      />
                      <div className="article">
                        <p
                          className="title is-7"
                          style={{
                            marginLeft: 12,
                            color: "#0a0078",
                            letterSpacing: "0.3px",
                          }}
                        >
                          МОНГОЛ УЛСЫН ШИНЖЛЭХ УХААНЫ АКАДЕМИ
                        </p>
                        <p
                          className="subtitle is-5"
                          style={{ color: "#0a0078", marginLeft: 11 }}
                        >
                          ПАЛЕОНТОЛОГИЙН ХҮРЭЭЛЭН
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="column is-4">
                  <br />
                  <br />
                  <br />
                  <p className="title">Нэвтрэх</p>
                  <LoginForm />
                </div>
              </div>
              <br />
              <br />
              <p className="subtitle is-6 has-text-centered">
                Хэрвээ та анх удаа нэвтэрч байгаа бол мэдээллийн ажилтантай
                холбогдож бүртгүүлнэ үү.
              </p>
              <br />
              <br />
            </div>
          </div>
          <p className="title has-text-centered is-6 has-text-weight-light">
            ПАЛЕОНТОЛОГИЙН ХҮРЭЭЛЭН © 2021. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </section>
    </div>
  );
}
