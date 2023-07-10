function newButton(text) {
    // Atribui a uma variável o elemento body do HTML
    const $body = document.querySelector("body");
    // Atribui a variável button a criação do elemento button
    const $button = document.createElement("button");
    // Atribui a propriedade textContent do elemento button o texto passado por parâmetro
    $button.textContent = text;
    // Insere o elemento button no corpo do HTML "antes do final"
    $body.insertAdjacentElement("beforeend", $button);
    // Retorna o button
    return $button;
}

const login = newButton("Login");
const signup = newButton("Signup");

login.style.cssText = `
    font-size: 40px;
`;

login.addEventListener("click", () => {
    console.log("Fazendo login");
});

signup.style.cssText = `
    font-size: 20px;
    color: red;
`;