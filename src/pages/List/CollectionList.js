import React, { useState, useMemo, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import Search from "../../components/Table/Search";
import Pagination from "../../components/Table/Pagination";

import axios from "axios";
import UserContext from "../../context/UserContext";
// import DialogAction from '../DialogAction'
import { getItems, deleteItem } from "../../api/collectionAPI";
export default function List(props) {
  const ctx = useContext(UserContext);

  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");
  // const [sorting, setSorting] = useState({ field: "", order: "" });

  const ITEM_PER_PAGE = 3;
  const [showDelete, setShowDelete] = useState(false);
  const checkUser = () => {
    ctx.state.role === "registrar" && setShowDelete(true);
    ctx.state.role === "admin" && setShowDelete(true);
    ctx.state.role === "expert" && setShowDelete(true);
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
    //   await axios.delete("http://localhost:8000/api/v1/collection", { id: id });
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
          item.field_no.toLowerCase().includes(search.toLowerCase())
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
                  <th>Хээрийн дугаар</th>
                  <th>Хуулбарласан аргачлал</th>
                  <th>Бүртгэсэн</th>
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
                      <label>{item.field_no}</label>
                    </td>
                    <td>
                      <label>{item.repro_method}</label>
                    </td>
                    <td>
                      <label>{item.cataloger}</label>
                    </td>
                    <td>
                      <div>
                        <Link to={`detailed-item/${item._id}/collection`}>
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
