function ConverterRealDolar (){
let real = document.querySelector('#valorReais').value
let dolar = 4.92
let api = 'https://economia.awesomepi.com.br/last/USD'
let somaPadrao = real / dolar
$.ajax({
    type:"GET", 
    url: api,
    success:(function(retorno){
        dolar = retorno.USDBRL.ask
        valorConvertido = real / dolar
        document.querySelector('#valorDolares').innerHTML= valorConvertido.toFixed([2]) 
    }),
    beforeSend: (function (){
        valorConvertido = real / dolar; //caso a api nao funcione o valor fixo do dolar é de 4.92
        document.querySelector('#valorDolares').innerHTML= somaPadrao.toFixed([2])
    })  
})
document.querySelector('#texto').innerHTML = 'valor convertido com a contação do Dolar atual que é no valor  de  ' + dolar

}