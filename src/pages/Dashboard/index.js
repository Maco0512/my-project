import React from "react";
// import "./main.css";
// import "./style.css";
const Dashboard = () => {
  return (
    <div className="content">
      <section className="hero is-fullheight">
        <div className="hero-head">
          <nav
            className="navbar is-transparent"
            role="navigation"
            aria-label="Main Navigation"
          >
            <div className="container">
              <div className="navbar-brand" style={{ marginTop: 10 }}></div>
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
                  956
                </p>
                <p className="subtitle">Үлэг гүрвэл</p>
              </div>
              <div className="column">
                <img src={require("../../assets/pageImg/c2.png")} alt="c2" />
                <p className="title is-3" style={{ color: "#3dbfcb" }}>
                  811
                </p>
                <p className="subtitle">Шувуу</p>
              </div>
              <div className="column">
                <img src={require("../../assets/pageImg/c3.png")} alt="c3" />
                <p className="title is-3" style={{ color: "#0aabbd" }}>
                  455
                </p>
                <p className="subtitle">Хөхтөн</p>
              </div>
              <div className="column">
                <img src={require("../../assets/pageImg/c4.png")} alt="c4" />
                <p className="title is-3" style={{ color: "#0085bf" }}>
                  631
                </p>
                <p className="subtitle">Яст мэлхий</p>
              </div>
              <div className="column">
                <img src={require("../../assets/pageImg/c5.png")} alt="c5" />
                <p className="title is-3" style={{ color: "#005bcd" }}>
                  744
                </p>
                <p className="subtitle">Загас</p>
              </div>
              <div className="column">
                <img src={require("../../assets/pageImg/c6.png")} alt="c6" />
                <p className="title is-3" style={{ color: "#3d5cdc" }}>
                  956
                </p>
                <p className="subtitle">Ургамал</p>
              </div>
              <div className="column">
                <img src={require("../../assets/pageImg/c7.png")} alt="c7" />
                <p className="title is-3" style={{ color: "#3e44e8" }}>
                  845
                </p>
                <p className="subtitle">Шавж</p>
              </div>
              <div className="column">
                <img src={require("../../assets/pageImg/c8.png")} alt="c8" />
                <p className="title is-3" style={{ color: "#4d3cf8" }}>
                  569
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
              Монгол улсын шинжлэх ухааны академийн Палеонтологийн хүрээлэнгийн
              бүртгэлийн санд <br />
              956 төрлийн үлэг гүрвэл, 811 төрлийн шувуу, 455 төрлийн хөхтөн
              амьтан, 631 төрлийн яст мэлхий, 744 төрлийн загас, <br />
              956 төрлийн ургамал, 845 төрлийн шавж, 569 төрлийн өндөг бүхий
              нийт 254654 олдвор байна.{"{"}" "{"}"}
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
              <div
                data-aos="fade-right"
                data-aos-duration={2000}
                className="column"
              >
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img src={require("../../assets/pageImg/f1.jpg")} />
                    </figure>
                  </div>
                  <div className="card-content has-text-weight-light">
                    <p className="title is-6 is-spaced">Олдворын нэр:</p>
                    <p className="subtitle is-6">Бүртгэлийн дугаар:</p>
                    <p className="subtitle is-6">Агууламж:</p>
                    <p className="subtitle is-6">Сан хөмрөгийн байршил:</p>
                    <p className="subtitle is-6">Тоо, дүрс:</p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration={2000}
                className="column"
              >
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img src={require("../../assets/pageImg/f2.jpg")} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-6 is-spaced">Олдворын нэр:</p>
                    <p className="subtitle is-6">Бүртгэлийн дугаар:</p>
                    <p className="subtitle is-6">Агууламж:</p>
                    <p className="subtitle is-6">Сан хөмрөгийн байршил:</p>
                    <p className="subtitle is-6">Тоо, дүрс:</p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration={2000}
                className="column"
              >
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img src={require("../../assets/pageImg/f3.jpg")} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-6 is-spaced">Олдворын нэр:</p>
                    <p className="subtitle is-6">Бүртгэлийн дугаар:</p>
                    <p className="subtitle is-6">Агууламж:</p>
                    <p className="subtitle is-6">Сан хөмрөгийн байршил:</p>
                    <p className="subtitle is-6">Тоо, дүрс:</p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration={2000}
                className="column"
              >
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img src={require("../../assets/pageImg/f4.jpg")} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-6 is-spaced">Олдворын нэр:</p>
                    <p className="subtitle is-6">Бүртгэлийн дугаар:</p>
                    <p className="subtitle is-6">Агууламж:</p>
                    <p className="subtitle is-6">Сан хөмрөгийн байршил:</p>
                    <p className="subtitle is-6">Тоо, дүрс:</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <a name="contact" />
      </section>
    </div>
  );
};

export default Dashboard;
