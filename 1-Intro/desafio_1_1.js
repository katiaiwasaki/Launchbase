// Cálculo de IMC

//peso / (altura * altura);

const nome = 'Carlos';
const peso = '84';
const altura = 1.88;

const imc = peso/(altura * altura);

//console.log(imc)

if (imc >= 30) {
    console.log(`${nome} você está acima do peso.`)
} else {
    console.log(`${nome} você não está acima do peso.`)
}



// Cálculo de aposentadoria

//O tempo de contribuição mínimo para homens é de 35 anos e, 
//para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de 
//contribuição do homem precisa ser de no mínimo 95 anos, 
//enquanto a mulher precisa ter no mínimo 85 anos na soma;

const nome2 = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

if (sexo === 'H') {
    if (contribuicao >= 35 && contribuicao + idade >= 95) {
        console.log(`${nome2}, você pode se aposentar.`)
    } else {
        console.log(`${nome2}, você não pode se aposentar.`)
    }
} else {
    if (contribuicao >= 30 && contribuicao + idade >= 85) {
        console.log(`${nome2}, você pode se aposentar.`)
    } else {
        console.log(`${nome2}, você não pode se aposentar.`)
    }
}
