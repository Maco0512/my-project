import React, { useState } from "react";
import axios from "../axios-orders";

const UserContext = React.createContext();

const initialState = {
  saving: false,
  logginIn: false,
  error: null,
  errorCode: null,
  token: null,
  userId: null,
  role: null,
  branch: null,
};

export const UserStore = (props) => {
  const [state, setState] = useState(initialState);

  const loginUserSucces = (token, userId, role, branch) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("role", role);
    // localStorage.setItem("expireDate", expireDate);
    // localStorage.setItem("refreshToken", refreshToken);
    setState({
      ...state,
      logginIn: false,
      error: null,
      errorCode: null,
      token,
      userId,
      role,
      branch,
      // user: {
      //   createdAt: "",
      //   email: "",
      //   name: "",
      //   password: "",
      //   role: "",
      // },
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    setState(initialState);
  };

  // const autoRenewTokenAfterMillisec = (milliSec) => {
  //   // token shinechleh code
  //   axios
  //     .post(
  //       "https://securetoken.googleapis.com/v1/token?key=AIzaSyCEmDZW6k2XJlQritKoYeJG14ExYa1rRSM",
  //       {
  //         grant_type: "refresh_token",
  //         refresh_token: localStorage.getItem("refreshToken"),
  //       }
  //     )
  //     .then((result) => {
  //       console.log("Token refreshed .....", result.data);
  //       const token = result.data.id_token;
  //       const userId = result.data.user_id;
  //       const expiresIn = result.data.expires_in;
  //       const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
  //       const refreshToken = result.data.refresh_token;

  //       loginUserSucces(token, userId, expireDate, refreshToken);
  //     })
  //     .catch((err) => {
  //       setState({
  //         ...state,
  //         logginIn: false,
  //         error: err.message,
  //         errorCode: err.code,
  //         token: null,
  //         userId: null,
  //         expireDate: null,
  //       });
  //     });

  //   // avtomat logout
  //   setTimeout(() => {
  //     // logout
  //     autoRenewTokenAfterMillisec(3600000);
  //   }, milliSec);
  // };

  const loginUser = (email, password) => {
    setState({ ...state, logginIn: true });

    const data = {
      email,
      password,
    };

    axios
      .post("http://localhost:8000/api/v1/users/login", data)
      .then((result) => {
        // LocalStorage ruu hadgalna
        console.log("Logged in =======>", result.data);
        console.log(new Date());

        const token = result.data.token;
        const userId = result.data.user._id;
        const role = result.data.user.role;
        const branch = result.data.user.branch;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("role", role);

        loginUserSucces(token, userId, role, branch);
        // dispatch(actions.autoLogoutAfterMillisec(expiresIn * 1000));
      })
      .catch((err) => {
        setState({
          // err.response.data.error.message
          ...state,
          logginIn: false,
          error: err.response.data.error.message,
          errorCode: err.code,
          token: null,
          userId: null,
          role: null,
        });
      });
  };

  const signupUser = (name, email, password, role, branch) => {
    setState({ ...state, saving: true });
    const data = {
      branch,
      role,
      email,
      name,
      password,
    };
    if (role === "admin" || role === "expert") delete data.branch;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + state.token,
    };

    axios
      .post("http://localhost:8000/api/v1/users/", data, {
        headers: headers,
      })
      .then((result) => {
        // LocalStorage ruu hadgalna
        console.log("Амжилттай үүсгэлээ");
        // const token = result.data.idToken;
        // const userId = result.data._id;
        // const role = result.data.user.role;

        // localStorage.setItem("token", token);
        // localStorage.setItem("userId", userId);

        setState({
          ...state,
          saving: false,
          // token,
          // userId,
          // role,
          error: null,
          errorCode: null,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          // saving: false,
          // token: null,
          // userId: null,
          // role: null,
          // branch:null,
          error: err.response.data.error.message,
          errorCode: err.code,
        });
      });
  };

  return (
    <UserContext.Provider
      value={{
        state,
        signupUser,
        loginUser,
        logout,
        loginUserSucces,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
