const usuarios = [

    {nome: "Ticio", 
    receitas: [115.3, 48.7, 98.3, 14.5], 
    despesas:[85.3, 13.5, 19.9]},

    {nome: "Mevio", 
    receitas: [24.6, 214.3, 45.3], 
    despesas:[185.3, 12.1, 120.0]},

    {nome: "Caio", 
    receitas: [9.8, 120.3, 340.2, 45.3], 
    despesas:[450.2, 29.9]}
]
function calcula_saldo(receitas , despesas){
    const soma_receitas = soma_numeros(receitas)//parametro
    const soma_despesas = soma_numeros(despesas)
    return soma_receitas - soma_despesas
}
function soma_numeros(numeros)//argumento essa função existe para ser usada dentro da fcalcula_saldo
{
    let soma = 0
    for(let i = 0; i<numeros.length; i++){
        soma = soma + numeros[i]
    }
    return soma
}
for( let i = 0; i<usuarios.length; i++){
    const saldo = calcula_saldo (usuarios[i].receitas , usuarios[i].despesas)
    if( saldo > 0) {
        console.log(`${usuarios[i].nome} possui saldo POSITIVO  de ${saldo.toFixed(2)}.`)//fixa valor com duas casas decimais
    } else {
        console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}.`)
    }
}