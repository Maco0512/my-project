export const getItems = () =>
  fetch("http://localhost:8000/api/v1/treasury").then((res) => res.json());

export const createItem = (item) =>
  fetch("http://localhost:8000/api/v1/treasury", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

export const updateItem = (item, id) =>
  fetch(`http://localhost:8000/api/v1/treasury/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
export const deleteItem = (id) =>
  fetch(`http://localhost:8000/api/v1/treasury/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const getItem = (id) =>
  fetch(`http://localhost:8000/api/v1/treasury/${id}`).then((res) =>
    res.json()
  );
