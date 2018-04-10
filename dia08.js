$(document).ready(function(){
    
    datas();
    strings();
    
    $('#cpf').keyup(function(){
        verificaCPF();
    });
});

function datas(){
    
    var data1 = new Date(0);
    var data2 = new Date(-1);
    var data3 = new Date(8640000000000000);
    var data4 = new Date("December 24, 1980 23:59");
    var data5 = new Date(2001,09,7,20,50,30,20); //o mês da data é um array que começa em 0;
    var data6 = new Date(); //HOJE
    
    show(data1);
    show(data2);
    show(data3);
    show(data4);
    show(data5);
    show(data6);
    
    
    
            
        
    setInterval(function(){
        var data7 = new Date(); //HOJE
        var min = (data7.getMinutes() + "").length > 1 ? "" + data7.getMinutes() : "0" + data7.getMinutes();        
        var sec = (data7.getSeconds() + "").length > 1 ? "" + data7.getSeconds() : "0" + data7.getSeconds();
      //  console.log(sec);
         var tempo = data7.getHours()+ ":" + min + ":" + sec;
         $('#hora').html(tempo);
     }, 1000);
    
    
      setTimeout(function(){
          
          var tela = screen.height + " x " + screen.width;
                      
        alert('Passaram 5 segundos: ' + tela);      
        
          //location.href="http://www.globo.com";   
          
          
          
        }, 500000);
    
    
    
    show(Math.PI);

    show(Math.ceil(5.6544789)); //ceil 5.6 > arredonda pra cima;
    show(Math.floor(5.6)); //floor 5.6 > arredonda pra baixo;
    show(Math.round(5.5)); //floor 5.6 > arredonda de forma condicional a metade;
    
    var y = 7.7;
    var r = Math.ceil(y);
    var t = Math.floor(y);
    
    
    show("==> " + r);
    show("==> " + t);
    show("==> " + y);
    
    var z = Math.round(y);
    show("==> " + z);
    show("==> " + y);
    
}

function strings(){
    
    var cpf = "";
    
     //RegExp
    var rx = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/g;
    
    var valido = rx.test(cpf);
    show("CPF valido ? " + valido);
    
}

function verificaCPF(){
    var rx = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/g;
    
    var texto = $('#cpf').val();
    
    var valido = rx.test(texto);
    
    console.log(texto, valido);

    if(valido){        
    $('#valido').html("CPF VALIDO");        
    }else{
        $('#valido').html("CPF invalido");
    }
    
    
    
}


function show(data){
    $('#display').html( $('#display').html() + data + "<br>" );
}
