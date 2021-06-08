export const getUsers = () =>
  fetch("http://localhost:8000/api/v1/users/").then((res) => res.json());

export const getUserBranch = (id) =>
  fetch(`http://localhost:8000/api/v1/users/${id}?select=branch`).then((res) =>
    res.json()
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

export const changePassword = (email) =>
  fetch(`http://localhost:8000/api/v1/users/forgot-password`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  }).then((res) => res.json());

export const resetPassword = (token, password) =>
  fetch(`http://localhost:8000/api/v1/users/reset-password`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, resetToken: token }),
  }).then((res) => res.json());
