import React, { useContext, useEffect, useState, useMemo } from "react";
import UserContext from "../../../context/UserContext";
// import { getUser } from "../../api/userAPI";
import InfoCard from "./InfoCard";
import ProfileHeader from "./ProfileHeader";
import SearchBar from "./SearchBar";
const Info = (props) => {
  const ctx = useContext(UserContext);
  const [user, setUser] = useState({ email: "", name: "" });
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      `http://localhost:8000/api/v1/users/${ctx.state.userId}/${props.type}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData);
        setData(responseData.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchUser = () => {
    let obj = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + ctx.state.token,
      },
    };

    fetch(`http://localhost:8000/api/v1/users/${ctx.state.userId}`, obj)
      .then((response) => response.json())
      .then((responseData) => {
        const data = { ...responseData.data };
        setUser({
          name: data.name,
          email: data.email,
        });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    // getUser(ctx.state.userId).then((res) => setUser(res));
    fetchUser();
    fetchData();

    return () => {
      setUser(null);
    };
  }, [ctx.state.token]);

  const itemsData = useMemo(() => {
    let computedItems = data;
    if (search) {
      computedItems = computedItems.filter((item) =>
        item.catalog_no.toLowerCase().includes(search.toLowerCase())
      );
    }
    return computedItems;
  }, [data, search]);

  const handleSearch = (e) => {
    setSearch(e);
  };
  function handleSubmit(event) {
    console.log(user);
    console.log(ctx.state.logginIn);
    // event.preventDefault();
    // console.log("Updated your profile");
  }
  // onSubmit(data);
  return (
    <div className="content">
      <div className="columns">
        <div className="container profile">
          <SearchBar handleSearch={handleSearch} placeholder={props.type} />
          <div className="columns is-mobile">
            {itemsData.map((e, i) => (
              <InfoCard
                key={e + i}
                image={typeof e.image === "string" && e.image}
                catalog_no={e.catalog_no}
                type={"fossil"}
                _id={e._id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
