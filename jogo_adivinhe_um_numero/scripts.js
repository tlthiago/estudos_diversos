let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let palpites = document.querySelector('.palpites');
let ultimoResultado = document.querySelector('.ultimoResultado');
let baixoOuAlto = document.querySelector('.baixoOuAlto');

let envioPalpite = document.querySelector('.envioPalpite');
let campoPalpite = document.querySelector('.campoPalpite');

let contagemPalpites = 1;
let botaoReinicio;
campoPalpite.focus();

function conferirPalpite() {
    let palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ' ';

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else {
        ultimoResultado.textContent = 'Errado';
        ultimoResultado.style.backgroundColor = 'red';
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito alto';
        }
    }

    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}

function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
    contagemPalpites = 1;

    let reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (let i = 0; i < reiniciarParas.length; i++) {
        reiniciarParas[i].textContent = '';
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

envioPalpite.addEventListener('click', conferirPalpite);