export const getItems = () =>
  fetch("http://localhost:8000/api/v1/dinasours").then((res) => res.json());

export const createItem = (item) =>
  fetch("http://localhost:8000/api/v1/dinasours", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

export const updateItem = (item, id) =>
  fetch(`http://localhost:8000/api/v1/dinasours/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
export const deleteItem = (id) =>
  fetch(`http://localhost:8000/api/v1/dinasours/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const getItem = (id) =>
  fetch(`http://localhost:8000/api/v1/dinasours/${id}`).then((res) =>
    res.json()
  );
