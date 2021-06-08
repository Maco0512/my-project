import React, { useState } from "react";
import List from "../General/DropDown";
import axios from "axios";
export default function Classification(props) {
  const URL = "http://localhost:8000/api/v1/classification/";

  const initalState = {
    class: "",
    superOrder: "",
    order: "",
    subOrder: "",
    family: "",
    genus: "",
    species: "",
  };
  const [data, setData] = useState(initalState);

  const [hasSuperOrder, setHasSuperOrder] = useState(false);
  const [hasOrder, setHasOrder] = useState(false);
  const [hasSubOrder, setHasSubOrder] = useState(false);
  const [hasFamily, setHasFamily] = useState(false);
  const [hasGenus, setHasGenus] = useState(false);
  const [hasSpecies, setHasSpecies] = useState(false);

  const onSubmit = () => {
    // data.class &&
    //   axios
    //     .post(`${URL}class`, { name: data.class })
    //     .then((result) => {
    //       hasSuperOrder &&
    //         data.superOrder &&
    //         axios
    //           .post(`${URL}superorder`, {
    //             class_id: result.data.id,
    //             name: data.superOrder,
    //           })
    //           .then((result) => {
    //             hasOrder &&
    //               data.order &&
    //               axios
    //                 .post(`${URL}order`, {
    //                   superorder_id: result.data.id,
    //                   name: data.order,
    //                 })
    //                 .then((result) => {
    //                   hasSubOrder &&
    //                     data.subOrder &&
    //                     axios
    //                       .post(`${URL}suborder`, {
    //                         order_id: result.data.id,
    //                         name: data.subOrder,
    //                       })
    //                       .then((result) => {
    //                         console.log(result);
    //                         hasFamily &&
    //                           data.family &&
    //                           axios
    //                             .post(`${URL}family`, {
    //                               suborder_id: result.data.id,
    //                               name: data.family,
    //                             })
    //                             .then((result) => {
    //                               hasGenus &&
    //                                 data.genus &&
    //                                 axios
    //                                   .post(`${URL}genus`, {
    //                                     family_id: result.data.id,
    //                                     name: data.genus,
    //                                   })
    //                                   .then((result) => {
    //                                     hasSpecies &&
    //                                       data.species &&
    //                                       axios.post(`${URL}species`, {
    //                                         genus_id: result.data.id,
    //                                         name: data.species,
    //                                       });
    //                                   });
    //                             });
    //                       });
    //                 });
    //           });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });

    hasSuperOrder && data.superOrder && console.log("superOrder");
    hasOrder && data.order && console.log("order");
    hasSubOrder && data.subOrder && console.log("subOrder");
    hasFamily && data.family && console.log("family");
    hasGenus && data.genus && console.log("genus");
    hasSpecies && data.species && console.log("species");
  };
  const handleSuperOrder = (e) => {
    if (e.target.checked) setHasSuperOrder(true);
    else {
      setHasSuperOrder(false);
      setHasOrder(false);
      setHasSubOrder(false);
      setHasFamily(false);
      setHasGenus(false);
      setHasSpecies(false);
      //
      data.superOrder = "";
    }
  };
  const handleOrder = (e) => {
    if (e.target.checked) setHasOrder(true);
    else {
      setHasOrder(false);
      setHasSubOrder(false);
      setHasFamily(false);
      setHasGenus(false);
      setHasSpecies(false);
      //
      data.order = "";
    }
  };
  const handleSubOrder = (e) => {
    if (e.target.checked) setHasSubOrder(true);
    else {
      setHasSubOrder(false);
      setHasFamily(false);
      setHasGenus(false);
      setHasSpecies(false);
      //
      data.subOrder = "";
    }
  };
  const handleFamily = (e) => {
    if (e.target.checked) setHasFamily(true);
    else {
      setHasFamily(false);
      setHasGenus(false);
      setHasSpecies(false);
      //
      data.family = "";
    }
  };
  const handleGenus = (e) => {
    if (e.target.checked) setHasGenus(true);
    else {
      setHasGenus(false);
      setHasSpecies(false);
      //
      data.genus = "";
    }
  };
  const handleSpecies = (e) => {
    if (e.target.checked) setHasSpecies(true);
    else {
      setHasSpecies(false);
      //
      data.species = "";
    }
  };
  const changeClass = (e) => {
    setData((formBefore) => ({
      ...formBefore,
      class: e,
    }));
  };
  const changeSuperOrder = (e) => {
    setData((formBefore) => ({
      ...formBefore,
      superOrder: e,
    }));
  };

  const changeOrder = (e) => {
    setData((formBefore) => ({
      ...formBefore,
      order: e,
    }));
  };

  const changeSubOrder = (e) => {
    setData((formBefore) => ({
      ...formBefore,
      subOrder: e,
    }));
  };
  const changeFamily = (e) => {
    setData((formBefore) => ({
      ...formBefore,
      family: e,
    }));
  };

  const changeGenus = (e) => {
    setData((formBefore) => ({
      ...formBefore,
      genus: e,
    }));
  };

  const changeSpecies = (e) => {
    setData((formBefore) => ({
      ...formBefore,
      species: e,
    }));
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
                value={data.class}
              />
              <hr className="dropdown-divider" />
              <List uy={data.class} select={changeClass} />
            </div>
          </div>
        </div>
        <label className="checkbox column">
          <input type="checkbox" onClick={handleSuperOrder} />
          Дээд баг бүртгүүлэх
        </label>
      </div>

      {/* {hasSuperOrder && (
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
                  type="text"
                  className="input is-transparent"
                  onChange={(e) => changeSuperOrder(e.target.value)}
                  value={data.superOrder}
                />
                <hr className="dropdown-divider" />
                <List uy={data.superOrder} select={changeSuperOrder} />
              </div>
            </div>
          </div>
          <label className="checkbox column">
            <input type="checkbox" onClick={handleOrder} />
            Баг бүртүүлэх
          </label>
        </div>
      )}

      {hasOrder && (
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
                  value={data.order}
                  type="text"
                  className="input is-transparent"
                  onChange={(e) => changeOrder(e.target.value)}
                />
                <hr className="dropdown-divider" />
                <List uy={data.order} select={changeOrder} />
              </div>
            </div>
          </div>
          <label className="checkbox column">
            <input type="checkbox" onClick={handleSubOrder} />
            Дэд баг бүртүүлэх
          </label>
        </div>
      )}
      {hasSubOrder && (
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
                  value={data.subOrder}
                  type="text"
                  className="input is-transparent"
                  onChange={(e) => changeSubOrder(e.target.value)}
                />
                <hr className="dropdown-divider" />
                <List uy={data.subOrder} select={changeSubOrder} />
              </div>
            </div>
          </div>
          <label className="checkbox column">
            <input type="checkbox" onClick={handleFamily} />
            Зүйлийн нэр бүртүүлэх
          </label>
        </div>
      )}
      {hasFamily && (
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
                  value={data.family}
                  type="text"
                  className="input is-transparent"
                  onChange={(e) => changeFamily(e.target.value)}
                />
                <hr className="dropdown-divider" />
                <List uy={data.family} select={changeFamily} />
              </div>
            </div>
          </div>
          <label className="checkbox column">
            <input type="checkbox" onClick={handleGenus} />
            Төрөл бүртгүүлэх
          </label>
        </div>
      )}
      {hasGenus && (
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
                  value={data.genus}
                  type="text"
                  className="input is-transparent"
                  onChange={(e) => changeGenus(e.target.value)}
                />
                <hr className="dropdown-divider" />
                <List uy={data.genus} select={changeGenus} />
              </div>
            </div>
          </div>
          <label className="checkbox column">
            <input type="checkbox" onClick={handleSpecies} />
            Зүйл бүртгүүлэх
          </label>
        </div>
      )}
      {hasSpecies && (
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
                  value={data.species}
                  type="text"
                  className="input is-transparent"
                  onChange={(e) => changeSpecies(e.target.value)}
                />
                <hr class="dropdown-divider" />
                <List uy={data.species} select={changeSpecies} />
              </div>
            </div>
          </div>
        </div>
      )} */}
      {/* <div className="field is-grouped columns">
        <div className="control">
          <button className="button is-link" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div> */}
    </div>
  );
}
