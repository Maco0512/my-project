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
};

export const UserStore = (props) => {
  const [state, setState] = useState(initialState);

  const loginUserSucces = (token, userId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    // localStorage.setItem("role", role);
    // localStorage.setItem("expireDate", expireDate);
    // localStorage.setItem("refreshToken", refreshToken);
    setState({
      ...state,
      logginIn: false,
      error: null,
      errorCode: null,
      token,
      userId,
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

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);

        loginUserSucces(token, userId);
        // dispatch(actions.autoLogoutAfterMillisec(expiresIn * 1000));
      })
      .catch((err) => {
        setState({
          // err.response.data.error.message
          ...state,
          logginIn: false,
          error: err.message,
          errorCode: err.code,
          token: null,
          userId: null,
        });
      });
  };

  const signupUser = (name, email, password, role) => {
    setState({ ...state, saving: true });

    const data = {
      role,
      email,
      name,
      password,
    };
    console.log(data);

    axios({
      method: "post",
      url: "http://localhost:8000/api/v1/users/",
      body: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTAxNWE4NDQ0ODAyMmY1MGM1OGJlNSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxOTQwNjU4MiwiZXhwIjoxNjIxOTk4NTgyfQ.3KPQ4q7RJDJMCoxTHB6YXCEDXoOCADRhKKfUhvIaScY",
      },
    })
      .then((result) => {
        // LocalStorage ruu hadgalna
        const token = result.data.idToken;
        const userId = result.data._id;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);

        setState({
          ...state,
          saving: false,
          token,
          userId,
          error: null,
          errorCode: null,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          saving: false,
          token: null,
          userId: null,
          error: err.message,
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
