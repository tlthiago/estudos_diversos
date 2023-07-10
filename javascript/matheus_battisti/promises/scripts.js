const myPromise = new Promise((resolve, reject) => {
  const nome = "Thiago";

  if (nome === "Thiago") {
    resolve("Usuário Thiago encontrado");
  } else {
    reject("O usuário Thiago não foi encontrado");
  }
});

myPromise.then((data) => {
  console.log(data);
});

// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
  const nome = "Thiago";

  if (nome === "Thiago") {
    resolve("Usuário Thiago encontrado");
  } else {
    reject("O usuário Thiago não foi encontrado");
  }
});

myPromise2
  .then((data) => {
    return data.toLowerCase();
  })
  .then((stringModificada) => {
    console.log(stringModificada);
  });

// Tratar erro exception do reject
const myPromise3 = new Promise((resolve, reject) => {
  const nome = "João";

  if (nome === "Thiago") {
    resolve("Usuário Thiago encontrado");
  } else {
    reject("O usuário Thiago não foi encontrado");
  }
});

myPromise3
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Aconteceu um erro: " + err);
  });

// Resolver várias promessas com all
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P4 ok");
  }, 2000);
});

const p5 = new Promise((resolve, reject) => {
  resolve("P5 ok");
});

const p6 = new Promise((resolve, reject) => {
  resolve("P6 ok");
});

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
  console.log(data);
});

console.log("Depois do All");

// Fetch request API do GitHub
// Fetch API
const userName = "tlthiago";
fetch(`http://api.github.com/users${userName}`, {
  method: "GET",
  headers: {
    Accept: "application/vnc.github.v3+json",
  },
}).then((response) => {
    console.log(typeof response);
    return response.json();
}).then((data) => {
    console.log(`O nome do usuário é ${data.name}`);
}).catch((err) => {
    console.log("Aconteceu um erro: " + err);
});