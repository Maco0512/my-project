import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";
import { getItem, updateItem } from "../../api/fossilAPI";
import apiAttribute from "../../api";
import img1 from "../../assets/pageImg/f1.jpg";
import img2 from "../../assets/pageImg/f2.jpg";
import axios from "axios";

import UserContext from "../../context/UserContext";
function DetailedItem() {
  const ctx = useContext(UserContext);

  const { register, handleSubmit } = useForm({
    defaultValues: { type: "changed" ? "test" : "" },
  });

  const param = useParams();
  const columnsData = apiAttribute(param.type);

  const [inEditMode, setInEditMode] = useState({
    status: false,
  });
  const [updated, setUpdated] = useState(false);
  const [list, setList] = useState([]);
  const [showEdit, setShowEdit] = useState(true);
  const checkUserEdit = (e) => {
    if (e === "fossil") {
      ctx.state.role === "treasurer" && setShowEdit(false);
      ctx.state.role === "registrar" && setShowEdit(false);
    }
    if (e === "treasury") {
      ctx.state.role === "researcher" && setShowEdit(false);
      ctx.state.role === "registrar" && setShowEdit(false);
    }
    if (e === "collection") {
      ctx.state.role === "treasurer" && setShowEdit(false);
      ctx.state.role === "researcher" && setShowEdit(false);
    }
  };
  useEffect(() => {
    const fetchItems = async () => {
      await axios
        .get(`http://localhost:8000/api/v1/${param.type}/${param.id}`)
        .then((e) => {
          let data = e.data.data;
          if (param.type === "fossil") {
            let meridian = { ...e.data.data.meridian };
            data = { ...meridian, ...data };
          }
          setList(data);
        });
      // setList(list.data)
    };
    fetchItems();
    checkUserEdit(param.type);

    return () => {
      setList(null);
    };
  }, [updated]);

  const onEdit = (event) => {
    event.preventDefault();
    setInEditMode({
      status: true,
    });
  };
  const onCancel = () => {
    setInEditMode({
      status: false,
    });
  };

  const submitHandler = handleSubmit(async (data) => {
    console.log(data);
    await axios
      .put(`http://localhost:8000/api/v1/${param.type}/${param.id}`, data)
      .then((e) => {
        setList(e.data.data);

        setUpdated(true);
      });

    setInEditMode({
      status: false,
    });
  });

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="card ">
              <div className="card-header">
                {/* <Link
                  className="card-header-icon"
                  to={`collection-registration/:${list.catalag_no}`}
                >
                  Цуглуулга бүртгэх
                </Link>
                <Link
                  className="card-header-icon"
                  to={`treasury-registration/:${list.catalag_no}`}
                >
                  Сан хөмрөг бүртгэх
                </Link> */}
              </div>
              <form onSubmit={submitHandler}>
                <div className="card-content">
                  {Object.keys(columnsData).map((key, i) => (
                    <div key={key + i} className="columns">
                      <div className="is-one-fifth column">
                        <label className="label">{columnsData[key]}:</label>
                      </div>
                      <div className="column">
                        {inEditMode.status ? (
                          <input
                            className="input"
                            name={key}
                            type="text"
                            {...register(key)}
                            defaultValue={list[key]}
                          />
                        ) : (
                          list && <label>{list[key]}</label>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card-footer">
                  {inEditMode.status ? (
                    <React.Fragment>
                      <button
                        type="submit"
                        className={"button card-footer-item"}
                        // onClick={() => onSave({})}
                      >
                        Save
                      </button>

                      <button
                        className={"button card-footer-item"}
                        style={{ marginLeft: 8 }}
                        onClick={onCancel}
                      >
                        Cancel
                      </button>
                    </React.Fragment>
                  ) : (
                    showEdit && (
                      <button
                        type="button"
                        className="button card-footer-item"
                        onClick={onEdit}
                      >
                        Edit
                      </button>
                    )
                  )}
                </div>
              </form>
            </div>
          </div>
          {/* // {list && list.image && (
          //   <div className="column">
          //     <div className="card">
          //       <div className="card-image">
          //         <img
          //           className=""
          //           src={require(`../../backend-complete/public/upload/${list.image}`)}
          //           alt="..."
          //         />
          //       </div>

          //       <div className="card-body">
          //         <div className="author"></div>
          //         <input type="file" className="description text-center" />
          //       </div>
          //     </div>
          //   </div>
          // )} */}
        </div>
      </div>
    </section>
  );
}

export default DetailedItem;
