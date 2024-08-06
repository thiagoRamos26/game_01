var numero = 0 ;
var attemps = 0;

function refresh(){
    //parte do pensar

    numero = parseInt(Math.random() * 50);

    console.log(numero)

}

function verifynumero(){
    var bet = window.document.getElementById('tex').value
    if(bet > 50 || bet < 1)
    {
       alert('valor invalida');
       return;
    }

    if(bet > numero)
    {
        attemps++;
        alert('foii alto de +')

    }
    else if (bet < numero)
    {
        attemps++;
        alert('foii baixo de +')

    }
    else
    {
        alert('✅ voce a certou com '+attemps+' erros')
    }
}

refresh();