import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import css from "./style.module.css";
import axios from "axios";
// import "./style.css";
const Dashboard = () => {
  const [lastAddedFossil, setlastAddedItem] = useState([]);
  const [lastAddedCollection, setlastAddedCollection] = useState([]);
  const [lastAddedTreasury, setlastAddedTreasury] = useState([]);

  const [dino, setDino] = useState("");
  const [fish, setFish] = useState("");
  const [mammalia, setMammalia] = useState("");
  const [turtle, setTurtle] = useState("");
  const [bird, setBird] = useState("");
  const [plant, setPlant] = useState("");
  const [insect, setInsect] = useState("");
  const [egg, setEgg] = useState("");
  // Үлэг гүрвэл Шувуу Хөхтөн ХөхтөнЯст мэлхийЯст мэлхий

  useEffect(() => {
    const fetchTotals = async () => {
      await axios
        .get("http://localhost:8000/api/v1/fossil/count")
        .then((e) => {
          setDino(e.data.data.dino);
          setFish(e.data.data.fish);
          setMammalia(e.data.data.mammalia);
          setTurtle(e.data.data.turtle);
          setBird(e.data.data.bird);
          setPlant(e.data.data.plant);
          setInsect(e.data.data.insect);
          setEgg(e.data.data.egg);
        })
        .catch((e1) => console.log(e1));
    };
    const fetchAddedItem = async () => {
      await axios
        .get("http://localhost:8000/api/v1/fossil", { params: { limit: 3 } })
        .then((e) => {
          setlastAddedItem(e.data.data);
        })
        .catch((e1) => console.log(e1));

      await axios
        .get("http://localhost:8000/api/v1/collection", {
          params: { limit: 3 },
        })
        .then((e) => {
          setlastAddedCollection(e.data.data);
        })
        .catch((e1) => console.log(e1));

      await axios
        .get("http://localhost:8000/api/v1/treasury", { params: { limit: 3 } })
        .then((e) => {
          setlastAddedTreasury(e.data.data);
        })
        .catch((e1) => console.log(e1));
    };
    fetchAddedItem();
    fetchTotals();
  }, []);
  return (
    <div className="content">
      {/* <div className={css.Content}>Notif</div> */}
      <section className="hero is-fullheight">
        <div className={css.Head + " hero-head"}>
          <nav
            className="navbar is-transparent"
            role="navigation"
            aria-label="Main Navigation"
          >
            <div className=" container">
              <div
                className="navbar-menu is-uppercase"
                style={{ marginTop: 10 }}
              >
                <div className="navbar-end">
                  <a
                    href="#home"
                    className="navbar-item"
                    style={{ color: "#06abbe" }}
                  >
                    <i className="fas fa-home" />
                  </a>
                  <a
                    href="#category"
                    className="navbar-item"
                    style={{ color: "#0085bf" }}
                  >
                    Төрөл
                  </a>
                  <a
                    href="#intro"
                    className="navbar-item"
                    style={{ color: "#005bcd" }}
                  >
                    Танилцуулга
                  </a>
                  <a
                    href="#latest"
                    className="navbar-item"
                    style={{ color: "#3e44e8" }}
                  >
                    Сүүлд нэмэгдсэн
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body" style={{ display: "block" }}>
          <a name="category" />
          <section className="section" style={{ backgroundColor: "#f9f9f9" }}>
            <div className="container">
              <div
                data-aos="fade-zoom-in"
                data-aos-duration={3000}
                className="columns has-text-centered"
              >
                <div className="column">
                  <img src={require("../../assets/pageImg/c1.png")} alt="c1" />
                  <p className="title is-3" style={{ color: "#87d7df" }}>
                    {dino}
                  </p>
                  <p className="subtitle">Үлэг гүрвэл</p>
                </div>
                <div className="column">
                  <img src={require("../../assets/pageImg/c2.png")} alt="c2" />
                  <p className="title is-3" style={{ color: "#3dbfcb" }}>
                    {bird}
                  </p>
                  <p className="subtitle">Шувуу</p>
                </div>
                <div className="column">
                  <img src={require("../../assets/pageImg/c3.png")} alt="c3" />
                  <p className="title is-3" style={{ color: "#0aabbd" }}>
                    {mammalia}
                  </p>
                  <p className="subtitle">Хөхтөн</p>
                </div>
                <div className="column">
                  <img src={require("../../assets/pageImg/c4.png")} alt="c4" />
                  <p className="title is-3" style={{ color: "#0085bf" }}>
                    {turtle}
                  </p>
                  <p className="subtitle">Яст мэлхий</p>
                </div>
                <div className="column">
                  <img src={require("../../assets/pageImg/c5.png")} alt="c5" />
                  <p className="title is-3" style={{ color: "#005bcd" }}>
                    {fish}
                  </p>
                  <p className="subtitle">Загас</p>
                </div>
                <div className="column">
                  <img src={require("../../assets/pageImg/c6.png")} alt="c6" />
                  <p className="title is-3" style={{ color: "#3d5cdc" }}>
                    {plant}
                  </p>
                  <p className="subtitle">Ургамал</p>
                </div>
                <div className="column">
                  <img src={require("../../assets/pageImg/c7.png")} alt="c7" />
                  <p className="title is-3" style={{ color: "#3e44e8" }}>
                    {insect}
                  </p>
                  <p className="subtitle">Шавж</p>
                </div>
                <div className="column">
                  <img src={require("../../assets/pageImg/c8.png")} alt="c8" />
                  <p className="title is-3" style={{ color: "#4d3cf8" }}>
                    {egg}
                  </p>
                  <p className="subtitle">Өндөг</p>
                </div>
              </div>
            </div>
          </section>
          <a name="intro" />
          <section className="section">
            <div className="container">
              <br />
              <br />
              <br />
              <p className="subtitle has-text-centered has-text-weight-light">
                Монгол улсын шинжлэх ухааны академийн Палеонтологийн
                хүрээлэнгийн бүртгэлийн санд <br />
                {dino} төрлийн үлэг гүрвэл, {fish} төрлийн шувуу, {mammalia}{" "}
                төрлийн хөхтөн амьтан, {turtle} төрлийн яст мэлхий, {fish}{" "}
                төрлийн загас, <br />
                {plant} төрлийн ургамал, {insect} төрлийн шавж, {egg} төрлийн
                өндөг бүхий нийт{" "}
                {dino + fish + mammalia + turtle + fish + plant + insect + egg}{" "}
                олдвор байна.
              </p>
              <br />
              <br />
              <br />
            </div>
          </section>
          <a name="latest" />
          <section className="section" style={{ backgroundColor: "#f9f9f9" }}>
            <div className="container">
              <p className="title is-5">Сүүлд нэмэгдсэн олдворууд</p>
              <div className="columns">
                {lastAddedFossil.map((e, i) => (
                  <div
                    key={i}
                    data-aos="fade-right"
                    data-aos-duration={2000}
                    className="column"
                  >
                    <div className="card">
                      <div className="card-image">
                        <figure className="image">
                          {/* <img src={require("../../assets/pageImg/f1.jpg")} /> */}
                        </figure>
                      </div>
                      <div className="card-content has-text-weight-light">
                        <p className="title is-6 is-spaced">
                          Олдворын нэр: {e.branch_name}
                        </p>
                        <p className="subtitle is-6">
                          Бүртгэлийн дугаар: {e.catalog_no}
                        </p>
                        <p className="subtitle is-6">
                          Агууламж: {e.depos_environ}
                        </p>
                        <p className="subtitle is-6">
                          Ерөнхий нэр:{e.common_name}
                        </p>
                        <p className="subtitle is-6">Байршил: {e.locality}</p>
                        <footer className="card-footer">
                          <Link
                            className="card-footer-item"
                            to={`detailed-item/${e._id}/fossil`}
                          >
                            Дэлгэрэнгүй
                          </Link>
                        </footer>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="container" style={{ paddingTop: "10px" }}>
              <p className="title is-5">Сүүлд нэмэгдсэн сан хөмрөг</p>
              <div className="columns">
                {lastAddedTreasury.map((e, i) => (
                  <div
                    key={i}
                    data-aos="fade-right"
                    data-aos-duration={2000}
                    className="column"
                  >
                    <div className="card">
                      <div className="card-image">
                        <figure className="image">
                          {/* <img src={require("../../assets/pageImg/f1.jpg")} /> */}
                        </figure>
                      </div>
                      <div className="card-content has-text-weight-light">
                        <p className="subtitle is-6">
                          Бүртгэлийн дугаар: {e.catalog_no}
                        </p>
                        <p className="subtitle is-6">
                          Тоо хэмжээ: {e.quantity}
                        </p>
                        <p className="subtitle is-6">Газар: {e.location}</p>
                        <footer className="card-footer">
                          <Link
                            className="card-footer-item"
                            to={`detailed-item/${e._id}/treasury`}
                          >
                            Дэлгэрэнгүй
                          </Link>
                        </footer>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="container" style={{ paddingTop: "10px" }}>
              <p className="title is-5">Сүүлд нэмэгдсэн цуглуулга</p>
              <div className="columns">
                {lastAddedCollection.map((e, i) => (
                  <div
                    key={i}
                    data-aos="fade-right"
                    data-aos-duration={2000}
                    className="column"
                  >
                    <div className="card">
                      {/* {e.image && (
                        <div className="card-image">
                          <figure className="image">
                            <img
                              src={require(`../../backend-complete/public/upload/${e.image}`)}
                            />
                          </figure>
                        </div>
                      )} */}
                      <div className="card-content has-text-weight-light">
                        <p className="subtitle is-6">
                          Бүртгэлийн дугаар: {e.catalog_no}
                        </p>
                        <p className="subtitle is-6">
                          Хээрийг дугаар: {e.field_no}
                        </p>
                        <p className="subtitle is-6">
                          Ерөнхий нэр:{e.repro_method}
                        </p>
                        <footer className="card-footer">
                          <Link
                            className="card-footer-item"
                            to={`detailed-item/${e._id}/collection`}
                          >
                            Дэлгэрэнгүй
                          </Link>
                        </footer>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <a name="contact" />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
