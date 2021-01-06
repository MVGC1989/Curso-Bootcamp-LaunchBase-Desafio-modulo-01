const nome = 'Marcos'
const sexo = "Masculino"
const peso = 78
const altura = 1.70

const imc = peso / (altura * altura)

console.log(` Olá ${nome}. Seu peso é de ${peso} quilos e sua altura é ${altura}. Seu I.M.C é ${imc}!`)

if( imc >= 30) { console.log(`${nome} você está acima do peso!`)
} else {console.log(`${nome} você não está acima do peso!`)}