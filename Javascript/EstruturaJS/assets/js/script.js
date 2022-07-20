var currentNumberSpan = document.getElementById('currentNumber');
var currentNumber = 0;
var btnPos = document.getElementById('adicionar')

//função que aumenta a quantidade do número atual
function increment(){
currentNumber = currentNumber + 1;
currentNumberSpan.innerHTML = currentNumber;
//Condicional que checa o valor do número atual e define uma cor se menor que zero ele fica vermelho, se maior fica verde, se igual a zero fica branco
if(currentNumber > 0){
    currentNumberSpan.style.color = 'green'
}else if(currentNumber < 0){
    currentNumberSpan.style.color = 'red'
} else{
    currentNumberSpan.style.color = 'white'
}
}
//função que diminui a quantidade do número atual
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberSpan.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberSpan.style.color = 'red'
    }else if(currentNumber > 0){
        currentNumberSpan.style.color = 'green'
    } else{
        currentNumberSpan.style.color = 'white'
    }
    }

