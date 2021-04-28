import React, { useState, useMemo, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import Search from "../../components/Table/Search";
import Pagination from "../../components/Table/Pagination";
import Head from "../../components/Table//Header";

import { getItems, deleteItem } from "../../api/itemAPI";

import UserContext from "../../context/UserContext";
// import DialogAction from '../DialogAction'
export default function List(props) {
  const ctx = useContext(UserContext);
  let role = JSON.parse(localStorage.getItem("roles"));

  // const [hasItem, setHasItem] = useState(false);
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });

  const ITEM_PER_PAGE = 3;

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
  }, []);

  const handleClick = (id) => {
    // async
    // const result = Confirm(
    //   "Та устгахдаа итгэлтэй байна уу",
    //   "Сonfirmation title"
    // );
    // if (result) {
    //   await deleteItem(id);
    //   // Сonfirmation confirmed
    // } else {
    //   // Сonfirmation not confirmed
    // }
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
          item.Specimen_names.toLowerCase().includes(search.toLowerCase()) ||
          item.Finder.toLowerCase().includes(search.toLowerCase())
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
          <div className="card-header">
            <Search
              onSearch={(value) => {
                setSearch(value);
                setCurrentPage(1);
              }}
            />
          </div>
          <br />
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
                  <th>#</th>
                  <th>Registration Number</th>
                  <th>Spicemen name</th>
                  <th>Finder</th>
                  <th>Place where to saving</th>
                  {role[0] !== "researcher" && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {itemsData.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <label>{item.Frame_num}</label>
                    </td>
                    <td>
                      <label>{item.Registeration_num}</label>
                    </td>
                    <td>
                      <label>{item.Specimen_names}</label>
                    </td>
                    <td>
                      <label>{item.Finder}</label>
                    </td>
                    <td>
                      <label>{item.Place_where_to_saving}</label>
                    </td>
                    {role[0] !== "researcher" && (
                      <td>
                        <div>
                          <Link to={`detailed-item/${item._id}`}>
                            <i className="fas fa-info-circle"></i>
                          </Link>
                          <i
                            class="fas fa-trash"
                            onClick={handleClick(item._id)}
                          ></i>
                        </div>
                      </td>
                    )}
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
