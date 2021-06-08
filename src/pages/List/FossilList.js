import React, { useState, useMemo, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import Search from "../../components/Table/Search";
import Pagination from "../../components/Table/Pagination";

import { getItems, deleteItem } from "../../api/fossilAPI";
import { getUserBranch } from "../../api/userAPI";

import axios from "axios";
import UserContext from "../../context/UserContext";
// import DialogAction from '../DialogAction'
export default function List(props) {
  const ctx = useContext(UserContext);

  // const [hasItem, setHasItem] = useState(false);
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");
  // const [sorting, setSorting] = useState({ field: "", order: "" });

  const ITEM_PER_PAGE = 3;

  const [showDelete, setShowDelete] = useState(false);
  const checkUser = () => {
    ctx.state.role === "researcher" && setShowDelete(true);
    ctx.state.role === "admin" && setShowDelete(true);
    ctx.state.role === "expert" && setShowDelete(true);
  };

  useEffect(() => {
    // getUserBranch(localStorage.getItem("userId")).then((e) =>
    //   console.log(e.data)
    // );
    const fetchItems = async () => {
      var params = new URLSearchParams();

      ctx.state.branch &&
        ctx.state.branch.forEach((e) => {
          params.append("branch_name", e);
        });

      const data = await axios
        .get("http://localhost:8000/api/v1/fossil", {
          params: params,
        })
        .then((e) => setItems(e.data.data));

      // await getItems(params).then((result) => {
      //   setItems(result.data);
      // });
      // setHasItem(true);
      // setItems(list.data);
      // setHasItem(true);
    };

    fetchItems();
    checkUser();
  }, []);

  const onDelete = ({ id }) => {
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
          item.locality.toLowerCase().includes(search.toLowerCase())
      );
    }

    return computedItems.slice(
      (currentPage - 1) * ITEM_PER_PAGE,
      (currentPage - 1) * ITEM_PER_PAGE + ITEM_PER_PAGE
    );
  }, [items, currentPage, search]);

  return (
    <div className="content">
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
                  <th>Олдворт газар</th>
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
                      <label>{item.depos_environ}</label>
                    </td>
                    <td>
                      <label>{item.locality}</label>
                    </td>

                    <td>
                      <div>
                        <Link to={`detailed-item/${item._id}/fossil`}>
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
