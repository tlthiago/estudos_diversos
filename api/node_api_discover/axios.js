const url = "http://localhost:5500/api";

// GET
function getUsers() {
  axios
    .get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch((error) => console.log(error));
}
getUsers();

// GET com parâmetros
function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then((response) => {
      const data = response.data;
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userID.textContent = data.id;
      userAvatar.textContent = data.avatar;
    })
    .catch((error) => console.log(error));
}
getUser(3);

// POST
const newUser = {
  name: "Paulo Gonçalves",
  avatar: "https://picsum.photos/200/300",
  city: "Belo Horizonte",
};

function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
addNewUser(newUser);

// PUT
const userUpdated = {
  name: "Alexandro Silva",
  avatar: "https://picsum.photos/300/200",
  city: "Belo Horizonte",
};

function updateUser(id, userUpdated) {
  axios
    .put(`${url}/${id}`, userUpdated)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
updateUser(3, userUpdated);

// DELETE
function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
deleterUser(3);
