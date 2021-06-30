import React, { useContext, useEffect, useState, useMemo } from "react";
import UserContext from "../../context/UserContext";
// import { getUser } from "../../api/userAPI";
import InfoCard from "./component/InfoCard";
import ProfileHeader from "./component/ProfileHeader";
import SearchBar from "./component/SearchBar";
import Info from "./component/Info";
const Profile = () => {
  const ctx = useContext(UserContext);
  // const [user, setUser] = useState({ email: "", name: "" });
  // const [search, setSearch] = useState("");
  // const [data, setData] = useState([]);

  // const fetchData = () => {
  //   fetch(`http://localhost:8000/api/v1/users/${ctx.state.userId}/${type}`)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       console.log(responseData);
  //       setData(responseData.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const fetchUser = () => {
  //   let obj = {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + ctx.state.token,
  //     },
  //   };

  //   fetch(`http://localhost:8000/api/v1/users/${ctx.state.userId}`, obj)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       const data = { ...responseData.data };
  //       setUser({
  //         name: data.name,
  //         email: data.email,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   if (ctx.state.role === "treasury") type = "fossil";
  //   else if (ctx.state.role === "registrar") type = "collection";
  //   else if (ctx.state.role === "researcher") type = "fossil";

  //   // getUser(ctx.state.userId).then((res) => setUser(res));
  //   fetchUser();
  //   fetchData();

  //   return () => {
  //     setUser(null);
  //   };
  // }, [ctx.state.token]);
  const [type, setType] = useState([]);
  useEffect(() => {
    if (ctx.state.role === "treasurer") setType(["treasury"]);
    else if (ctx.state.role === "registrar") setType(["collection"]);
    else if (ctx.state.role === "researcher") setType(["fossil"]);
    else {
      setType(["fossil", "collection", "treasury"]);
    }
  }, []);

  // const itemsData = useMemo(() => {
  //   let computedItems = data;
  //   if (search) {
  //     computedItems = computedItems.filter((item) =>
  //       item.catalog_no.toLowerCase().includes(search.toLowerCase())
  //     );
  //   }
  //   return computedItems;
  // }, [data, search]);

  // const handleSearch = (e) => {
  //   setSearch(e);
  // };
  // function handleSubmit(event) {
  //   console.log(user);
  //   console.log(ctx.state.logginIn);
  //   // event.preventDefault();
  //   // console.log("Updated your profile");
  // }
  // // onSubmit(data);
  return (
    <div className="content">
      <div className="columns">
        <div className="container profile">
          <ProfileHeader
          // length={data.length}
          // email={user.email}
          // name={user.name}
          />
          {type.map((items) => (
            <Info type={items} />
          ))}
          {/* <SearchBar handleSearch={handleSearch} />
          <div className="columns is-mobile">
            {itemsData.map((e, i) => (
              <InfoCard
                key={e + i}
                image={e.image}
                catalog_no={e.catalog_no}
                type={"fossil"}
                _id={e._id}
              />
            ))}
          </div> */}
          {/* <div className="columns is-mobile">
            {itemsData.map((e, i) => (
              <InfoCard
                key={e + i}
                image={e.image}
                catalog_no={e.catalog_no}
                type={"fossil"}
                _id={e._id}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Profile;
