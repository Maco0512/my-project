import axios from "axios";
export const getItems = (params) =>
  fetch("http://localhost:8000/api/v1/fossil", { params }).then((res) =>
    res.json()
  );

export const createItem = (item) =>
  fetch("http://localhost:8000/api/v1/fossil", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

export const updateItem = (item, id) =>
  fetch(`http://localhost:8000/api/v1/fossil/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
export const deleteItem = (id) =>
  fetch(`http://localhost:8000/api/v1/fossil/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const getItem = (id) =>
  fetch(`http://localhost:8000/api/v1/fossil/${id}`).then((res) => res.json());

export const uploadPhoto = (id, data) => {
  console.log(data);
  axios.put(`http://localhost:8000/api/v1/fossil/${id}/photo`, data, {
    headers: {
      "Content-Type": data.type,
    },
  });
};
