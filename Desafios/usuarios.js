const usuarios =[

{nome: 'Marcos', 
tecnologias: ['HTML',  'CSS']},

{nome: 'Jean', 
tecnologias: ['JavaScript',  'CSS']},

{nome: 'Mine', 
tecnologias: ['HTML',  'Node.JS']}
]


for(let i = 0; i <usuarios.length; i++){

    console.log(`${usuarios[i].nome} trabalha com as tecnologias ${usuarios[i].tecnologias}.`)
}