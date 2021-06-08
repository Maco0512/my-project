const URL = "http://localhost:8000/api/v1/classification/";

export const createClass = (data) =>
  axios.post(
    `${URL}/class`,
    data
      .then((result) => result.json())
      .catch((err) => {
        console.log(err);
      })
  );

export const loginUser = (item) =>
  fetch("http://localhost:8000/api/v1/users/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

export const updateUser = (item, id) =>
  fetch(`http://localhost:8000/api/v1/users/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
export const deleteUser = (id, token) =>
  fetch(`http://localhost:8000/api/v1/users/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  });

export const getUser = (id) =>
  fetch(`http://localhost:8000/api/v1/users/${id}`).then((res) => res.json());
