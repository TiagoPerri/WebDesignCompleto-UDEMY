function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }                    
    return (total / qtd).toFixed(2); // nos mostra duas casas decimais
}

function sortear(n){
    var _n = n || 1;
    var nSorteado = Math.random(); // nos da um numero aleatorio
    nSorteado = nSorteado * _n;
    nSorteado = Math.floor(nSorteado); // Arredonda o numero para baixo
    return nSorteado;
}