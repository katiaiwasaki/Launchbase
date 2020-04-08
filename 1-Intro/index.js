//Cria um programa que calcula a média
//das notas entre on alunos
//e envia mensagem de cálculo da média

const a1 = 'Mayk'
const n1 = 9.8

const a2 = 'Diego'
const n2 = 3

const a3 = 'Pedro'
const n3 = 2

const media = (n1 + n2 + n3) / 3

//Se a média for maior que 5, parabenizar a turma
if (media > 5) {
    //faz alguma coisa
    console.log(`A nota foi de ${media}. Parabéns!`)
} else {
    //faz alguma outra coisa
    console.log('A média é menor que 5.')
}
