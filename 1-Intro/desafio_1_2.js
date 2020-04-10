// CONSTRUÇÃO E IMPRESSÃO DE OBJETOS
// Crie um programa que armazena dados da empresa Rocketseat 
//dentro de um objeto chamado empresa.

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    },
};

//console.log(empresa)

// Imprimir o texto: 'A empresa Rocketseat está localizada 
// em Rua Guilherme Gembala, 260'

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}.`);

// VETORES E OBJETOS

// Crie um programa com um objeto para armazenar dados de um programador 
// como nome, idade e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, por isso armazene 
// essas tecnologias em um array.
// As tecnologias também devem ser objetos contendo nome e especialidade.

const programadores = {
    nome: 'Carlos',
    idade: 32,
    tecnologias: [
        {nome: 'C++', especialidade: 'Desktop'},
        {nome: 'Python', especialidade: 'Data Science'},
        {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
};

console.log(`O usuário ${programadores.nome} tem ${programadores.idade} e usa a tecnologia ${programadores.tecnologias[0].nome} com especialidade em ${programadores.tecnologias[0].especialidade}.`)