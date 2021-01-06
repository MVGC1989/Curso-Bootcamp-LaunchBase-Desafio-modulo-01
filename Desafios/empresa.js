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