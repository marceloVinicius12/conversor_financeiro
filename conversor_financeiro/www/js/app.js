 function ConverterRealDolar (){
 let real = document.querySelector('#valorReais').value
 let dolar = 4.92
 let api = 'https://economia.awesomeapi.com.br/last/USD'
 let somaPadrao = real / dolar;
 
 
 $.ajax({
     type:"GET", 
     url: api,
   success:(function(retorno){
         dolar = retorno.USDBRL.ask
       valorConvertido = real / dolar
       document.querySelector('#valorDolares').value= valorConvertido.toFixed([2]);
       document.querySelector('#valorReais').value = "";
    
   }),
    beforeSend: (function (){
        valorConvertido = real / dolar; //caso a api nao funcione o valor fixo do dolar é de 4.92
        document.querySelector('#valorDolares').value= somaPadrao.toFixed([2]);
        document.querySelector('#valorReais').value = "";
    })  
 })

 }
function inverterValores (){
let dolarDigitado = document.querySelector('#valorDolares').value
let api = 'https://economia.awesomeapi.com.br/last/USD'
let somaPadrao = dolarDigitado * 4.92
$.ajax({
    type:"GET", 
    url: api,
    success:(function(retorno){
        dolar = retorno.USDBRL.ask
        valorReal = dolarDigitado * dolar;
        document.querySelector('#valorReais').value = valorReal;
        document.querySelector('#valorDolares').value = ""
    }),
    beforeSend: (function (){
        somaPadrao = dolarDigitado * 4.92 //caso a api nao funcione o valor fixo do dolar é de 4.92
        document.querySelector('#valorDolares').value= somaPadrao.toFixed([2])
        document.querySelector('#valorDolares').value = ""
    }), 
})

}

