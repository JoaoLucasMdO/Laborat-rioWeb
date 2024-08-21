//  Funções

// function funcao(n1, n2){

//     return n1 + n2
// }

// const soma = (n1, n2) => {

//     return n1 + n2
// }

// Síncrona -> retorna um valor/objeto
// Assíncrona -> retorna uma Promise com valor/objeto

// var - global
// let - escopo limitado
// const - constante -> não muda

// const soma = async (n1, n2) => {
    
//     return n1 + n2
// }

// const z = soma(20, 30)

// console.log(z)

const operador1={
    Id : 1,
    Nome : "João",
    Idade : 25,
    Genero : "M",
    Salario : 3000
}

const operador2={
    Id : 2,
    Nome : "Maria",
    Idade : 25,
    Genero : "F",
    Salario : 5000
}



const operadores = [operador1, operador2]

// const imprimeSalario = (operador) => {
//     console.log(`Salario de ${operador.Nome} é ${operador.Salario}.`)
// }

// operadores.forEach((operador) => {
//     imprimeSalario(operador)
// })

// const maleOperators = operadores.filter(({Genero}) => {

//     return Genero == "M"
// })

// const Operators = operadores.find(({Id}) => {

//     return Id == 1
// })

// console.log(`Homens: ${JSON.stringify(Operators)}`)

// const operadoresReajuste = operadores.map(({Id, Nome, Idade, Genero, Salario}) => {
//     return {
//         Id,
//         Nome, 
//         Idade, 
//         Genero,
//         Salario : Salario * 1.05
//     }
// })

// const operadoresReajuste2 = operadores.map((operator) => {
//     const {Salario} = operator
//     return {
//        ...operator,
//         Salario : Salario * 1.05
//     }
// })

// console.log(`Reajustes: ${JSON.stringify(operadoresReajuste2)}`)

// Reduce

// const totalSalario = operadores.map(({Salario}) => Salario)
// .reduce((totalSalario, Salario) => {
//     return totalSalario + Salario
// }, 0)

const operador3={
    Id : 3,
    Nome : "Pedro",
    Idade : 25,
    Genero : "M",
    Salario : 4000
}

const operador4={
    Id : 4,
    Nome : "Mary",
    Idade : 25,
    Genero : "F",
    Salario : 6000
}

const totalSalario = operadores.reduce((operadorMenorSalario, operador) => {
    if(operador.Salario < operadorMenorSalario.Salario) {
        return operador}
    else {
        return operadorMenorSalario}

}, {})

console.log(`>> Menor Salario: ${JSON.stringify(totalSalario)}`)