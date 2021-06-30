import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import List from "../General/DropDown/List";
import axios from "axios";
export default function Classification(props) {
  const [classy, setClassy] = useState({
    id: "",
    value: "",
  });
  const [superOrder, setSuperOrder] = useState({
    id: "",
    value: "",
  });
  const [order, setOrder] = useState({
    id: "",
    value: "",
  });
  const [subOrder, setSubOrder] = useState({
    id: "",
    value: "",
  });
  const [family, setFamily] = useState({
    id: "",
    value: "",
  });
  const [genus, setGenus] = useState({
    id: "",
    value: "",
  });
  const [species, setSpecies] = useState({
    id: "",
    value: "",
  });

  useEffect(() => {
    // Update the document title using the browser API
    if (!classy.id) {
      console.log("id is changing");
      setSuperOrder({ value: "", id: "" });
      setOrder({ value: "", id: "" });
      setSubOrder({ value: "", id: "" });
      setFamily({ value: "", id: "" });
      setGenus({ value: "", id: "" });
      setSpecies({ value: "", id: "" });
    }
    if (!superOrder.id) {
      setOrder({ value: "", id: "" });
      setSubOrder({ value: "", id: "" });
      setFamily({ value: "", id: "" });
      setGenus({ value: "", id: "" });
      setSpecies({ value: "", id: "" });
    }
    if (!order.id) {
      setSubOrder({ value: "", id: "" });
      setFamily({ value: "", id: "" });
      setGenus({ value: "", id: "" });
      setSpecies({ value: "", id: "" });
    }
    if (!subOrder.id) {
      setFamily({ value: "", id: "" });
      setGenus({ value: "", id: "" });
      setSpecies({ value: "", id: "" });
    }
    if (!family.id) {
      setGenus({ value: "", id: "" });
      setSpecies({ value: "", id: "" });
    }
    if (!species.id) setSpecies({ value: "", id: "" });
  }, [
    classy.id,
    superOrder.id,
    order.id,
    subOrder.id,
    family.id,
    genus.id,
    species.id,
  ]);

  const [hasClass, setHasClass] = useState(true);
  const [hasSuperOrder, setHasSuperOrder] = useState(true);
  const [hasOrder, setHasOrder] = useState(true);
  const [hasSubOrder, setHasSubOrder] = useState(true);
  const [hasFamily, setHasFamily] = useState(true);
  const [hasGenus, setHasGenus] = useState(true);
  const [hasSpecies, setHasSpecies] = useState(true);

  const onSubmit = (type) => {
    console.log("submitting  " + type);
    switch (type) {
      case "class":
        axios.post("http://localhost:8000/api/v1/classification/class", {
          name: classy.value,
        });
        break;
      case "superorder":
        axios.post("http://localhost:8000/api/v1/classification/superorder", {
          name: superOrder.value,
          class_id: classy.id,
        });
        break;
      case "order":
        axios.post("http://localhost:8000/api/v1/classification/order", {
          name: order.value,
          superorder_id: superOrder.id,
        });
        break;
      case "suborder":
        axios.post("http://localhost:8000/api/v1/classification/suborder", {
          name: subOrder.value,
          order_id: order.id,
        });
        break;
      case "family":
        axios.post("http://localhost:8000/api/v1/classification/family", {
          name: family.value,
          suborder_id: subOrder.id,
        });
        break;
      case "genus":
        axios.post("http://localhost:8000/api/v1/classification/genus", {
          name: genus.value,
          family_id: family.id,
        });
        break;
      case "species":
        axios.post("http://localhost:8000/api/v1/classification/species", {
          name: species.value,
          genus_id: genus.id,
        });
        break;

      default:
        break;
    }
    // hasSuperOrder && data.superOrder && console.log("superOrder");
    // hasOrder && data.order && console.log("order");
    // hasSubOrder && data.subOrder && console.log("subOrder");
    // hasFamily && data.family && console.log("family");
    // hasGenus && data.genus && console.log("genus");
    // hasSpecies && data.species && console.log("species");
  };
  const selectClass = (value, id) => {
    if (value && id) {
      console.log(value + " id is " + id);
      setClassy({ value, id });
      setHasClass(false);
    }
  };

  const selectSuperOrder = (value, id) => {
    if (value && id) {
      console.log(value + " id is " + id);
      setSuperOrder({ value, id });
      setHasSuperOrder(false);
    }
  };
  const selectOrder = (value, id) => {
    if (value && id) {
      console.log(value + " id is " + id);
      setOrder({ value, id });
      setHasOrder(false);
    }
  };
  const selectSubOrder = (value, id) => {
    if (value && id) {
      console.log(value + " id suborder is " + id);
      setSubOrder({ value, id });
      setHasSubOrder(false);
    }
  };
  const selectFamily = (value, id) => {
    if (value && id) {
      console.log(value + " family id  is " + id);
      setFamily({ value, id });
      setHasFamily(false);
    }
  };
  const selectGenus = (value, id) => {
    if (value && id) {
      console.log(value + " genus id  is " + id);
      setGenus({ value, id });
      setHasGenus(false);
    }
  };
  const selectSpecies = (value, id) => {
    if (value && id) {
      console.log(value + " species id  is " + id);
      setSpecies({ value, id });
      setHasSpecies(false);
    }
  };
  // // ------------------------------------------type changing event
  const changeClass = (e) => {
    setHasClass(true);
    setClassy({ value: e, id: "" });
  };
  const changeSuperOrder = (e) => {
    setHasSuperOrder(true);
    setSuperOrder({ value: e, id: "" });
  };

  const changeOrder = (e) => {
    setHasOrder(true);
    setOrder({ value: e, id: "" });
  };

  const changeSubOrder = (e) => {
    setHasSubOrder(true);
    setSubOrder({ value: e, id: "" });
  };
  const changeFamily = (e) => {
    setHasFamily(true);
    setFamily({ value: e, id: "" });
  };

  const changeGenus = (e) => {
    setHasGenus(true);
    setGenus({ value: e, id: "" });
  };

  const changeSpecies = (e) => {
    setHasSpecies(true);
    setSpecies({ value: e, id: "" });
  };

  return (
    <div className="container ">
      <div className="field is-horizontal columns" style={{ width: "500px" }}>
        <label className="label column">Анги</label>
        <div className="control column">
          <div className="dropdown is-active">
            <div
              className="dropdown-menu"
              id="dropdown-menu"
              role="menu"
              style={{ position: " relative" }}
            >
              <input
                autoComplete="off"
                type="text"
                className="input is-transparent"
                onChange={(e) => changeClass(e.target.value)}
                value={classy.value}
              />
              <hr className="dropdown-divider" />
              {hasClass && (
                <List
                  searchedVal={classy.value}
                  select={selectClass}
                  name="class"
                  onSubmit={onSubmit}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {classy.id && (
        <div className="field is-horizontal columns" style={{ width: "500px" }}>
          <label className="label column">Дээд баг</label>
          <div className="control column">
            <div className="dropdown is-active">
              <div
                className="dropdown-menu"
                id="dropdown-menu"
                role="menu"
                style={{ position: " relative" }}
              >
                <input
                  autoComplete="off"
                  type="text"
                  className="input is-transparent"
                  onChange={(e) => changeSuperOrder(e.target.value)}
                  value={superOrder.value}
                />
                <hr className="dropdown-divider" />
                {hasSuperOrder && (
                  <List
                    searchedVal={superOrder.value}
                    select={selectSuperOrder}
                    name="superorder"
                    onSubmit={onSubmit}
                    id={classy.id}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {superOrder.id && (
        <div className="field is-horizontal columns" style={{ width: "500px" }}>
          <label className="label column">Баг</label>
          <div className="control column">
            <div className="dropdown is-active">
              <div
                className="dropdown-menu"
                id="dropdown-menu"
                role="menu"
                style={{ position: " relative" }}
              >
                <input
                  value={order.value}
                  type="text"
                  className="input is-transparent"
                  onChange={(e) => changeOrder(e.target.value)}
                />
                <hr className="dropdown-divider" />
                {hasOrder && (
                  <List
                    searchedVal={order.value}
                    select={selectOrder}
                    name="order"
                    onSubmit={onSubmit}
                    id={superOrder.id}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {order.id && (
        <div className="field is-horizontal columns" style={{ width: "500px" }}>
          <label className="label column ">Дэд баг</label>
          <div className="control column">
            <div className="dropdown is-active">
              <div
                className="dropdown-menu"
                id="dropdown-menu"
                role="menu"
                style={{ position: " relative" }}
              >
                <input
                  value={subOrder.value}
                  type="text"
                  className="input is-transparent"
                  onChange={(e) => changeSubOrder(e.target.value)}
                />
                <hr className="dropdown-divider" />
                {hasSubOrder && (
                  <List
                    searchedVal={subOrder.value}
                    select={selectSubOrder}
                    name="suborder"
                    onSubmit={onSubmit}
                    id={order.id}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {subOrder.id && (
        <div className="field is-horizontal columns" style={{ width: "500px" }}>
          <label className="label column">Овог</label>
          <div className="control column">
            <div className="dropdown is-active">
              <div
                className="dropdown-menu"
                id="dropdown-menu"
                role="menu"
                style={{ position: " relative" }}
              >
                <input
                  value={family.value}
                  type="text"
                  className="input is-transparent"
                  onChange={(e) => changeFamily(e.target.value)}
                />
                <hr className="dropdown-divider" />
                <hr className="dropdown-divider" />
                {hasFamily && (
                  <List
                    searchedVal={family.value}
                    select={selectFamily}
                    name="family"
                    onSubmit={onSubmit}
                    id={subOrder.id}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {family.id && (
        <div className="field is-horizontal columns" style={{ width: "500px" }}>
          <label className="label column">Төрөл</label>
          <div className="control column">
            <div className="dropdown is-active">
              <div
                className="dropdown-menu"
                id="dropdown-menu"
                role="menu"
                style={{ position: " relative" }}
              >
                <input
                  value={genus.value}
                  type="text"
                  className="input is-transparent"
                  onChange={(e) => changeGenus(e.target.value)}
                />
                <hr className="dropdown-divider" />
                {hasGenus && (
                  <List
                    searchedVal={genus.value}
                    select={selectGenus}
                    name="genus"
                    onSubmit={onSubmit}
                    id={family.id}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {genus.id && (
        <div className="field is-horizontal columns" style={{ width: "500px" }}>
          <label className="label column">Зүйлийн нэр </label>
          <div className="control column">
            <div className="dropdown is-active">
              <div
                className="dropdown-menu"
                id="dropdown-menu"
                role="menu"
                style={{ position: " relative" }}
              >
                <input
                  value={species.value}
                  type="text"
                  className="input is-transparent"
                  onChange={(e) => changeSpecies(e.target.value)}
                />
                <hr className="dropdown-divider" />
                {hasSpecies && (
                  <List
                    searchedVal={species.value}
                    select={selectSpecies}
                    name="species"
                    onSubmit={onSubmit}
                    id={genus.id}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
