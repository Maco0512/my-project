import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";
// import "./style.css";
const Home = () => {
  return (
    <div className="content">
      <section className={css.Content + " hero is-fullheight "}>
        <div className="hero-head">
          <nav
            className="navbar is-transparent"
            role="navigation"
            aria-label="Main Navigation"
          >
            <div className="container">
              <div className="navbar-brand" style={{ marginTop: 10 }}>
                <a href="#" className="navbar-item">
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
                      className="subtitle is-4"
                      style={{
                        color: "#0a0078",
                        marginLeft: 11,
                      }}
                    >
                      ПАЛЕОНТОЛОГИЙН ХҮРЭЭЛЭН
                    </p>
                  </div>
                </a>
              </div>
              <div
                className="navbar-menu is-uppercase"
                style={{ marginTop: 10 }}
              >
                <div className="navbar-end">
                  <a
                    href="#contact"
                    className="navbar-item"
                    style={{ color: "#4d3cf8" }}
                  >
                    Холбоо барих
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title has-text-weight-light">
              Монгол улсын шинжлэх ухааны академи <br />
              Палеонтологийн хүрээлэн
            </h1>
            <h2 className="subtitle has-text-weight-light">
              бүртгэлийн нэгдсэн сан
            </h2>

            <NavLink className="nav-link" to="/login">
              <button
                type="button"
                className="button is-primary is-small is-rounded is-hover"
                // onClick={()=><Redirect to="/login" />}
              >
                НЭВТРЭХ
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      <a name="contact" />
      <section className="section">
        <div className="container">
          <div className="columns has-text-centered is-one-thirds">
            <div className="column is-one-thirds">
              <div className="field">
                <p className="title is-5 is-spaced">Холбоос</p>
                <p className="subtitle is-6" style={{ marginBottom: "0.3rem" }}>
                  Нүүр
                </p>
                <p className="subtitle is-6" style={{ marginBottom: "0.3rem" }}>
                  Төрөл
                </p>
                <p className="subtitle is-6" style={{ marginBottom: "0.3rem" }}>
                  Танилцуулга
                </p>
                <p className="subtitle is-6" style={{ marginBottom: "0.3rem" }}>
                  Сүүлд нэмэгдсэн
                </p>
                <p className="subtitle is-6" style={{ marginBottom: "0.3rem" }}>
                  Холбоо барих
                </p>
              </div>
            </div>
            <div className="column is-one-thirds">
              <div className="field">
                <p className="title is-5" style={{ paddingBottom: 20 }}>
                  Холбоо барих
                </p>
                <p className="subtitle is-6">
                  ШУА-ийн Палеонтологийн хүрээлэн <br /> Улаанбаатар-15160,
                  Данзангийн гудамж 3/1, <br />
                  Ш/Х-46/650
                </p>
                <p className="subtitle is-6">
                  Утас: +(976) 70118283 <br />
                  И-мэйл: paleo@mas.ac.mn <br />
                  Вебсайт: paleo.ac.mn
                </p>
              </div>
            </div>
            <div className="column is-one-thirds">
              <div className="field">
                <p className="title is-5" style={{ paddingBottom: 20 }}>
                  Олон нийтийн сүлжээ
                </p>
                <p className="subtitle is-6">
                  <a
                    href="https://www.facebook.com/paleo.ac.mn"
                    target="_blank"
                  >
                    <i className="fab fa-2x fa-facebook" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
