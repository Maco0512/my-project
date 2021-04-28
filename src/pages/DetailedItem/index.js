import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getItem, updateItem } from "../../api/itemAPI";
import apiAttribute from "../../api/apiAttribute";
import img1 from "../../assets/pageImg/f1.jpg";
import img2 from "../../assets/pageImg/f2.jpg";
function DetailedItem() {
  const { register, handleSubmit } = useForm({
    defaultValues: { type: "changed" ? "test" : "" },
  });

  const param = useParams();
  const columnsData = apiAttribute("dino");

  const [inEditMode, setInEditMode] = useState({
    status: false,
  });
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const list = await getItem(param.id);
      console.log(list);
      setList(list.data);
    };
    fetchItems();
  }, []);

  const onEdit = (event) => {
    event.preventDefault();
    setInEditMode({
      status: true,
    });
  };
  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
    });
  };

  const submitHandler = handleSubmit((data) => {
    data._id = list._id;
    Object.entries(data).toString() === Object.entries(list).toString()
      ? console.log(" is  not changed")
      : console.log("changed");

    // await new updateItem(data, data.id);
  });

  return (
    <div className="content">
      <div className="container">
        <div className="columns">
          <div className="col-md-8 column">
            <div className="card ">
              <div className="card-header ">
                <h4 className="card-title">Detailed Item</h4>
              </div>
              <br />
              <form onSubmit={submitHandler}>
                <div className="card-body">
                  {/* <div className="left">{left}</div>
            <div className="right">{right}</div> */}
                  {columnsData.map((e) => (
                    <div key={e} className="columns">
                      <div className="col-4 column">
                        <label>{e}:</label>
                      </div>
                      <div className="col-7 column">
                        {inEditMode.status ? (
                          e !== "Contents" ? (
                            <input
                              name={e}
                              type="text"
                              // ref={register}
                              defaultValue={list[e]}
                            />
                          ) : (
                            <textarea
                              name={e}
                              type="text"
                              // ref={register}
                              defaultValue={list[e]}
                            />
                          )
                        ) : (
                          <label>{list[e]}</label>
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
                        className={"btn btn-edit"}
                        // onClick={() => onSave({})}
                      >
                        Save
                      </button>

                      <button
                        className={"btn btn-edit"}
                        style={{ marginLeft: 8 }}
                        onClick={onCancel}
                      >
                        Cancel
                      </button>
                    </React.Fragment>
                  ) : (
                    <button
                      type="button"
                      className={"btn btn-edit"}
                      onClick={onEdit}
                    >
                      Edit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 column">
            <div className="card">
              <div className="card-image">
                <img className="" src={img1} alt="..." />
              </div>
              <div className="card-image">
                <img className="" src={img2} alt="..." />
              </div>
              <div className="card-body">
                <div className="author"></div>
                <input type="file" className="description text-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedItem;
