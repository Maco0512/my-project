export const getItems = () =>
  fetch("http://localhost:4000/").then((res) => res.json());

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
  fetch(`http://localhost:4000/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
export const deleteItem = (id) =>
  fetch(`http://localhost:4000/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const getItem = (id) =>
  fetch(`http://localhost:4000/${id}`).then((res) => res.json());
