import React, { useState, useMemo, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import Search from "../../components/Table/Search";
import Pagination from "../../components/Table/Pagination";

import axios from "axios";
import UserContext from "../../context/UserContext";

import { getItems, deleteItem } from "../../api/treasuryAPI";
// import DialogAction from '../DialogAction'
export default function List(props) {
  const ctx = useContext(UserContext);

  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");
  const [activeModal, setActiveModal] = useState(false);
  // const [sorting, setSorting] = useState({ field: "", order: "" });

  const ITEM_PER_PAGE = 3;
  const [showDelete, setShowDelete] = useState(false);
  const checkUser = () => {
    const role = localStorage.getItem("role");
    ctx.state.role === "treasurer" && setShowDelete(true);
    ctx.state.role === "admin" && setShowDelete(true);
    ctx.state.role === "expert" && setShowDelete(true);

    role === "treasurer" && setShowDelete(true);
    role === "admin" && setShowDelete(true);
    role === "expert" && setShowDelete(true);
  };

  useEffect(() => {
    const fetchItems = async () => {
      await getItems().then((result) => {
        setItems(result.data);
      });
      // setHasItem(true);
      // setItems(list.data);
      // setHasItem(true);
    };
    fetchItems();
    checkUser();
  }, []);
  const [result, setResult] = useState(false);
  const onDelete = ({ id }) => {
    // console.log(id);
    // confirmAlert({
    //   title: "Та устгах гэж байна",
    //   message: "Үүнийг хийнэ гэдэгтээ итгэлтэй байнуу",
    //   buttons: [
    //     {
    //       label: "Yes",
    //       onClick: () => setResult(true),
    //     },
    //     {
    //       label: "No",
    //       onClick: () => setResult(false),
    //     },
    //   ],
    // });
    // if (result) {
    //   await axios.delete(`http://localhost:8000/api/v1/treasury/${id}`);
    // }
    // setResult(false);
  };

  // const responseHandler=(res)=> {
  //   // res.row.forEach((i,row)=>row.state=selections.includes(rowid)!==-1
  //   // return res
  // }
  const itemsData = useMemo(() => {
    let computedItems = items;
    setTotalItems(computedItems.length);
    if (search) {
      console.log(computedItems);
      computedItems = computedItems.filter(
        (item) =>
          item.catalog_no.toLowerCase().includes(search.toLowerCase()) ||
          item.condition_desc.toLowerCase().includes(search.toLowerCase())
      );
    }

    return computedItems.slice(
      (currentPage - 1) * ITEM_PER_PAGE,
      (currentPage - 1) * ITEM_PER_PAGE + ITEM_PER_PAGE
    );
  }, [items, currentPage, search]);

  return (
    <div className="content">
      {/* <div className={"modal " + activeModal ? " " : " "}>
        <div className="modal-background"></div>
        <div class="modal-card">
          <section class="modal-card-body">
            Та үүнийг устгахдаа итгэлтэй байна уу
          </section>
          <footer class="modal-card-foot">
            <button
              class="button is-danger"
              onClick={() => setActiveModal(false)}
            >
              Тийм
            </button>
            <button class="button">Үгүй</button>
          </footer>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div> */}
      <div className="container">
        <div className="card">
          <div className="card-content">
            <Search
              onSearch={(value) => {
                setSearch(value);
                setCurrentPage(1);
              }}
            />
            <table className="table ">
              <thead>
                <tr>
                  <th>Цуглуулгын дугаар</th>
                  <th>Дээд баг</th>
                  <th>Хадгалагдсан орчны мэдээлэл</th>
                  <th>Шилжилт</th>
                  <th>Үйлдлүүд</th>
                </tr>
              </thead>
              <tbody>
                {itemsData.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <label>{item.catalog_no}</label>
                    </td>
                    <td>
                      <label>{item.branch_name}</label>
                    </td>
                    <td>
                      <label>{item.location}</label>
                    </td>
                    <td>
                      <label>{item.movement}</label>
                    </td>
                    <td>
                      <div>
                        <Link to={`detailed-item/${item._id}/treasury`}>
                          <i className="fas fa-info-circle"></i>
                        </Link>
                        {showDelete && (
                          <i
                            className="fas fa-trash"
                            onClick={() =>
                              onDelete({
                                id: item._id,
                              })
                            }
                          ></i>
                        )}
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
