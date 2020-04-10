//Cria um programa que calcula a média
//das turmas de alunos
//e envia mensagem de cálculo da média

const alunosDaTurmaA = [
    {
        nome: 'Mayk',
        nota: 9.8
    },
    {
        nome: 'Diego',
        nota: 10
    },
    {
        nome: 'Pedro',
        nota: 2
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Lucas',
        nota: 2
    },
    {
        nome: 'Jorge',
        nota: 6.3
    },
    {
        nome: 'Henrique',
        nota: 4.6
    },
    {
        nome: 'Suarez',
        nota: 8.6
    },
    {
        nome: 'Ricardo',
        nota: 10
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota;
    }
    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
        //Se a média for maior que 5, parabenizar a turma
    if (media > 5) {
        //faz alguma coisa
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns!`)
    } else {
        //faz alguma outra coisa
        console.log(`A média da turma ${turma} é menor que 5.`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')
