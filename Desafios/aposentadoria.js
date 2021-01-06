const nome = 'José'
const sexo = 'Masculino'
const idade = 58
const contribuição = 37
const calculo = idade + contribuição

const homem_aposentar = sexo == 'Masculino' && contribuição >= 35 && calculo >= 95
const mulher_aposentar = sexo == 'Feminino' && contribuição >= 30 && calculo >= 85

if (homem_aposentar || mulher_aposentar){
    console.log(`${nome}, você pode se aposentar!`)
} else {console.log(`${nome}, você não pode se aposentar!`)}