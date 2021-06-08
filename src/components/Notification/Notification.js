import React, { useToggle } from "react";
import css from "./style.module.css";
import Shadow from "../General/Shadow";
export default function Notification(props) {
  return (
    <div className={css.Notifications}>
      {/* <Shadow show={props.show} /> */}
      {/* darahad={props.closeConfirmModal} /> */}ç
      {/* <div className="icon_wrap">{props.children}</div> */}
      <div className={css.Notification_dd}>
        <ul className="notification_ul">
          <div className="notification is-primary">
            <button className="delete"></button>
            Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
            ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
            fringilla. Nullam gravida purus diam, et dictum{" "}
            <a>felis venenatis</a> efficitur.
          </div>
          <div className="notification is-warning">
            <button className="delete"></button>
            Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
            ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
            fringilla. Nullam gravida purus diam, et dictum{" "}
            <a>felis venenatis</a> efficitur.
          </div>
          <li className="mcd success">
            <div className="notify_icon">
              <span className="icon"></span>
            </div>
            <div className="notify_data">
              <div className="title">Lorem, ipsum dolor.</div>
              <div className="sub_title">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className="notify_status">
              <p>Success</p>
            </div>
          </li>
          <li className="pizzahut failed">
            <div className="notify_icon">
              <span className="icon"></span>
            </div>
            <div className="notify_data">
              <div className="title">Lorem, ipsum dolor.</div>
              <div className="sub_title">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className="notify_status">
              <p>Failed</p>
            </div>
          </li>
          <li className="kfc success">
            <div className="notify_icon">
              <span className="icon"></span>
            </div>
            <div className="notify_data">
              <div className="title">Lorem, ipsum dolor.</div>
              <div className="sub_title">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className="notify_status">
              <p>Success</p>
            </div>
          </li>
          <li className="show_all">
            <p className="link">Show All Activities</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
