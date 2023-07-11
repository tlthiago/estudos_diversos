const url = "http://localhost:5500/api";

// GET
function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.log(error));
}
getUsers();

// GET com parâmetros
function getUser(id) {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch((error) => console.log(error));
}
getUser(1);

// POST
const newUser = {
  name: "Paulo Gonçalves",
  avatar: "http://picsum.photos/200/300",
  city: "Belo Horizonte",
};
addUser(newUser);

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.log(error));
}

// PUT
const updatedUser = {
  name: "Alexandro Silva",
  avatar: "http://picsum.photos/200/300",
  city: "Belo Horizonte",
};

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.log(error));
}
updateUser(updatedUser, 2);

// DELETE
function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.log(error));
}
deleteUser(6);
