/*Cálculo de aposentadoria
Crie um programa para calcular a aposentadoria de uma pessoa.

Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;*/


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
