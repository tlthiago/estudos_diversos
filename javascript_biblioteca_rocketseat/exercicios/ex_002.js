/*  ### Transformar notas escolares
    Crie um algoritmo que transforme as notas do sistema
    númerico para sistemas de notas em caracteres tipo A B C

    * de 90 para cima   - A
    * entre 80 - 89     - B
    * entre 70 - 79     - C
    * entre 60 - 69     - D
    * menor que 60      - F
*/

function converteNotas(nota) {
  switch (true) {
    case nota > 89 && nota <= 100:
      console.log("O aluno obteve nota A.");
      break;
    case nota >= 80 && nota <= 89:
      console.log("O aluno obteve nota B.");
      break;
    case nota >= 70 && nota <= 79:
      console.log("O aluno obteve nota C.");
      break;
    case nota >= 60 && nota <= 69:
      console.log("O aluno obteve nota D.");
      break;
    case nota <= 60 && nota > 0:
      console.log("O aluno obteve nota F.");
      break;
    default:
      console.log("Nota inválida.");
  }
}

converteNotas(85);
