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
    axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data;
            userName.textContent = data.name;
            userCity.textContent = data.city;
            userID.textContent = data.id;
            userAvatar.textContent = data.avatar;
        })
        .catch((error) => console.log(error));
}


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
getUsers();
