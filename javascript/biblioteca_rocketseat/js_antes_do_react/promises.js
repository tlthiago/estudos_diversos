// Promises
const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

somaDoisNumeros(1, 3)
  .then((soma) => console.log(soma))
  .catch((err) => console.log(err));

fetch("http://api.github.com/users/tlthiago")
  .then((response) => {
    response.text().then((body) => {
      console.log(body);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Boa prática para aninhamento de then's
fetch("http://api.github.com/users/tlthiago")
  .then((response) => {
    // Retornar uma promisse
    return response.json();
  })
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.log(err);
  });

// async await
// Toda função assincrona tornas-se uma promisse
async function buscaDadosNoGitHub() {
  try {
    const response = await fetch("http://api.github.com/users/tlthiago");
    const body = await response.json();

    console.log(body.name);
  } catch (err) {
    console.log(err);
  }
}
// Sendo uma promisse a sintaxe para retornar um valor deverá ser escrita dessa forma
buscaDadosNoGitHub().then(name => {
    console.log(name);
});
