// se a peça possuir um peso superior a 100g, pode cadastrar
// caso a lista de peças seja superior a 10, imprimir mensagem de erro
// caso a peça tenha um nome com quantidade inferior a 3 caracteres, informar uma mensagem de erro

let peso = 150 //let = declarar variáveis

if (peso>100) {
    console.log('Pode cadastrar') //mesma coisa que priintf
    
} else {
    console.log('Peso inferior a 100 gramas, não pode ser cadastrada')
    
}



let listapecas = 12

if (listapecas>10) {
    console.log('Quantidade acima da capacidade da caixa')
} else {
    console.log('Pode cadastrar, capacidade dentro do permitido')
}

let nomepeca = 'pistao'

if (nomepeca.length >3) {
    console.log('pode cadastrar')
} else {
    console.log('numero de caracteres inferior a 3')
    
}