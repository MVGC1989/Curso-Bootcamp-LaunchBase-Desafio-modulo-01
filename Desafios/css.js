const usuarios =[

{nome: 'Marcos', 
tecnologias: ['HTML',  'CSS']},

{nome: 'Natasha', 
tecnologias: ['JavaScript',  'CSS']},

{nome: 'Mine', 
tecnologias: ['HTML',  'Node.JS']}
]

function checarSeUsuarioUsaCSS(usuarios){

    for(let i= 0; i < usuarios.tecnologias.length; i++ ){

    if(usuarios.tecnologias[i] == 'CSS') return true;
    } return false
}  
for(let c = 0; c < usuarios.length; c++){
    const usuarioTrabalhacomCSS = checarSeUsuarioUsaCSS(usuarios[c])
    if (usuarioTrabalhacomCSS) {
        console.log(`O(a) usuário(a) ${usuarios[c].nome} trabalha com CSS.`)
    }
}