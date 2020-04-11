// Desafios para fortalecer alguns conceitos, entre eles:

// Funções e métodos;
// - Estruturas de repetição;
// - Escopos.
// - Usuários e tecnologias

// Crie um programa que armazena um array de usuários (objetos), 
// cada usuário tem um nome e suas tecnologias (novo array.

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

function informacoes(lista) {
    for (let i=0; i < lista.length; i++) {
        console.log(`${lista[i].nome} trabalha com ${lista[i].tecnologias}.`)
    }
};

informacoes(usuarios);

// BUSCA POR TECNOLOGIA

// Crie uma função que recebe os dados de um objeto de usuário e 
// retorna SE o usuário trabalha com CSS ou não. Essa função deve 
// retornar um boolean true/false.

function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele 
    // trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    for (let k = 0; k < usuarios.length; k++) {
        if (usuarios[k].nome == usuario) {
            return usuarios[k].tecnologias.includes('CSS')
        }
    }
  };



for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i].nome);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}


// Soma de despesas e receitas

// Crie um programa que calcula a soma de receitas e despesas de 
// usuários e no fim retorna o saldo (receitas - despesas).

const usuarios3 = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

