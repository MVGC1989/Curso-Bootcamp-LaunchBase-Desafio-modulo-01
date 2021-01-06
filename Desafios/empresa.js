/*Construção e impressão de objetos
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: Rocketseat

Cor: Roxo

Foco: Programação

Endereço:

Rua: Rua Guilherme Gembala
Número: 260

Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:

A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260*/

const usuario ={
    nome: 'João',
    empresa : { 
        nome: 'Rocketseat',
        foco: 'Programação',
        cor: 'Roxo',
        endereço : {
            rua: 'Rua Guilherme Gembala',
            número: 260
        }
    }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada na ${usuario.empresa.endereço.rua}, ${usuario.empresa.endereço.número}.`)
