import React, { useState, useMemo, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import Search from "../../components/Table/Search";
import Pagination from "../../components/Table/Pagination";
import Modal from "../../components/General/Modal";
// import Signup from "../../components/subRegistration/Signup";

import axios from "axios";
import UserContext from "../../context/UserContext";
// import DialogAction from '../DialogAction'

import styles from "./style.module.css";
export default function RequestList(props) {
  const ctx = useContext(UserContext);

  // const [hasItem, setHasItem] = useState(false);
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // const [sorting, setSorting] = useState({ field: "", order: "" });

  const ITEM_PER_PAGE = 10;

  useEffect(() => {
    const fetchItems = async () => {
      var params = new URLSearchParams();

      ctx.state.branch &&
        ctx.state.branch.forEach((e) => {
          params.append("branch_name", e);
        });

      await axios
        .get("http://localhost:8000/api/v1/fossil", {
          params: params,
        })
        .then((e) => setItems(e.data.data));
    };

    fetchItems();
  }, []);

  const onApprove = (data) => {
    console.log("Approving");
    data.requestID = data._id;
    delete data._id;
    console.log(data);
  };
  const onReject = (data) => {
    console.log("Rejecting");
    console.log(data);
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
    // if (result)
    //   await axios.delete("http://localhost:8000/api/v1/fossil", { id: id });
  };

  const [showList, setShowList] = useState(false);

  const closeConfirmModal = () => {
    setShowList(false);
  };
  const showConfirmModal = () => {
    setShowList(true);
  };
  const [detailedList, setDetailedList] = useState([]);

  const onMore = (data) => {
    showConfirmModal();
    let meridian = { ...data.meridian };
    delete data.meridian;
    delete data._id;
    delete data.__v;
    delete data.user_id;
    let temp = { ...meridian, ...data };
    console.log("temp==>");
    console.log(temp);
    setDetailedList(temp);
  };

  return (
    <div className="content">
      <Modal closeConfirmModal={closeConfirmModal} show={showList}>
        {/* <Signup /> */}
        <div className={`card-content ${styles.Overflow}`}>
          {// Object.keys(columnsData).map((key, i) => (
          //             <div key={key + i} className="columns">
          //               <div className="is-one-fifth column">
          //                 <label className="label">{columnsData[key]}:</label>
          //               </div>
          //               <div className="column">
          //                   <label>{items[key]}</label>
          //               </div>
          //             </div>
          //           ))
          Object.keys(detailedList).map((key, i) => (
            <p key={i}>
              {detailedList[key] &&
                (key === "image" ? (
                  <img
                    className=""
                    src={`http://localhost:8000/public/upload/${detailedList[key]}`}
                    alt="..."
                    width="300"
                  />
                ) : (
                  <span>
                    {key}:{detailedList[key]}
                  </span>
                ))}
            </p>
          ))}
        </div>
      </Modal>
      <div className="container">
        {/* <h4 className="card-title">Item list</h4>
          <p className="card-category">Category </p> */}
        <div className="card">
          {/* <div className="select">
              <select className="form-control" id="locale">
                <option value="af-ZA">af-ZA</option>
                <option value="ar-SA">ar-SA</option>
              </select>
            </div> */}

          <div className="card-content">
            <table className="table ">
              <thead>
                <tr>
                  <th>Цуглуулгын дугаар</th>
                  <th>Дээд баг</th>
                  <th>Хадгалагдсан орчны мэдээлэл</th>
                  <th>Олдворт газар</th>
                  <th>Үйлдлүүд</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <label>{item.catalog_no}</label>
                    </td>
                    <td>
                      <label>{item.branch_name}</label>
                    </td>
                    <td>
                      <label>{item.depos_environ}</label>
                    </td>
                    <td>
                      <label>{item.locality}</label>
                    </td>

                    <td>
                      <div className="tags has-addons">
                        <span
                          className="tag is-primary"
                          onClick={() => onApprove(item)}
                        >
                          Зөвшөөрөх
                        </span>
                        <span
                          className="tag is-danger"
                          onClick={() => onReject(item)}
                        >
                          Буцаах
                        </span>
                        <span className="tag">
                          {/* <Link to={`detailed-item/${item._id}/fossil`}> */}
                          <i
                            className="fas fa-info-circle"
                            onClick={() => onMore(item)}
                          />
                          {/* </Link> */}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <Pagination
              total={totalItems}
              itemsPerPage={ITEM_PER_PAGE}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
