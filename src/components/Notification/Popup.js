import React from "react";
import css from "./style.module.css";
export default function Popup() {
  return (
    <div className={css.Popup}>
      <div className="shadow"></div>
      <div className="inner_popup">
        <div className="notification_dd">
          <ul className="notification_ul">
            <li className="title">
              <p>All Notifications</p>
              <p className="close">
                <i className="fas fa-times" aria-hidden="true"></i>
              </p>
            </li>
            <li className="starbucks success">
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
            <li className="baskin_robbins failed">
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
            <li className="baskin_robbins failed">
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
          </ul>
        </div>
      </div>
    </div>
  );
}
