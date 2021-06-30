import React, { useEffect, useState, useContext, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";
import { getItem, updateItem } from "../../api/fossilAPI";
import apiAttribute from "../../api";
import axios from "axios";
import ImageViewer from "react-simple-image-viewer";

import UserContext from "../../context/UserContext";
function CollectionDetailed() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const ctx = useContext(UserContext);

  const { register, handleSubmit } = useForm({
    defaultValues: { type: "changed" ? "test" : "" },
  });

  const param = useParams();
  const columnsData = apiAttribute("collection");

  const [inEditMode, setInEditMode] = useState({
    status: false,
  });
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
        .get(`http://localhost:8000/api/v1/collection/${param.id}`)
        .then((e) => {
          setList(e.data.data);
        });
      // setList(list.data)
    };
    fetchItems();
    checkUserEdit(param.type);
    return () => {
      setList(null);
    };
  }, []);

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
        console.log("Амжилттай хадгалав");
        setList(e.data.data);
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
                        onClick={submitHandler}
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
                      <React.Fragment>
                        {/* <button className="button card-footer-item "> */}
                        <Link to={`/app/fossil-registration/` + param.id}>
                          Олдвор үүсгэх
                        </Link>
                        {/* </button> */}
                        <button
                          className="button card-footer-item is-primary"
                          onClick={onEdit}
                        >
                          Өөрчлөлт оруулах
                        </button>
                        <button
                          className="button card-footer-item is-danger"
                          onClick={onEdit}
                        >
                          Устгах
                        </button>
                      </React.Fragment>
                    )
                  )}
                </div>
              </form>
            </div>
          </div>
          {list.image && list.image.length >= 1 && (
            <div className="column">
              <div className="card">
                <div className="card-image">
                  {list.image.map((e, i) => (
                    <img
                      className=""
                      src={`http://localhost:8000/uploads/images/photo_${e}`}
                      alt="..."
                      width="300"
                      onClick={() => openImageViewer(i)}
                    />
                  ))}
                </div>

                <div className="card-body">
                  <div className="author"></div>
                  {inEditMode.status && (
                    <input type="file" className="description text-center" />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={list.image.map(
            (e) => `http://localhost:8000/uploads/images/photo_${e}`
          )}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
        />
      )}
    </section>
  );
}

export default CollectionDetailed;
