function newButton(text, callback) {
    // Atribui a uma variável o elemento body do HTML
    const $body = document.querySelector("body");
    // Atribui a variável button a criação do elemento button
    const $button = document.createElement("button");
    // Atribui a propriedade textContent do elemento button o texto passado por parâmetro
    $button.textContent = text;

    // Execução da função de callback
    callback($button);

    // Insere o elemento button no corpo do HTML "antes do final"
    $body.insertAdjacentElement("beforeend", $button);
}

//Cria o botão e passa sua personalização antes da inserção via função de callback
newButton("Login", (button) => {
    button.style.cssText = `
        font-size: 25px;
    `;

    button.addEventListener("click", () => {
        console.log(("OI"));
    })
});

newButton("Signup", (button) => {
    button.style.cssText = `
    font-size: 35px;
    color: red;
    `;
});