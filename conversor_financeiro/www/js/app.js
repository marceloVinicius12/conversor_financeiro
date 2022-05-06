function ConverterRealDolar (){
let real = document.querySelector('#valorReais').value
let dolar = 4.92

let api = 'https://economia.awesomeapi.com.br/last/USD'
$.ajax({
    type:"GET", 
    url: api,
    success:(function(retorno){
        dolar = retorno.USDBRL.ask
        valorConvertido = real / dolar
        document.querySelector('#valorDolares').innerHTML= valorConvertido.toFixed([2]) 
    }),
    beforeSend: (function (){
        console.log("processando")
    })
})

}