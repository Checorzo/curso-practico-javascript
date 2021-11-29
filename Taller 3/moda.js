/* const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
]; */


function calcularModa(lista){
    const listaCount = {};

    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    )
   
    const listaArray = Object.entries( listaCount ).sort(
        function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
        }
    );
    
    const modaLista = listaArray[ listaArray.length - 1 ];
    
    const modas = listaArray.filter(
        function(numeroMayor){
            return numeroMayor[1] === modaLista[1];
        }
    );

        return modas;
        
}
function ordenarLista(lista){
    const listaOrdenada = lista.sort(
        function(value1, value2){
            return value1 - value2;
        }  
      )
    return lista;
}

function imprimirModa(lista){
    const modaImpresa = [];

    for(let i = 0; i < lista.length ; i++){
        modaImpresa[i] = lista[i][0];
    }
    return modaImpresa;
}

function onClickCalcularModaAritmetica(){
    const inputNumero = document.getElementById('inputNumero');
    const numeroStr = inputNumero.value;

    const listaNumero =numeroStr.split(',').map(
        function(elemento){
            return parseInt(elemento);
        }
    );


    const listaOrd = document.getElementById('lista');
    listaOrd.innerText = "Lista ordenada de menor a mayor: " + ordenarLista(listaNumero);

    const modaLista = calcularModa(listaNumero);

    const resultP =document.getElementById('resultP');
    resultP.innerText = "La moda de la serie de numero es: " + imprimirModa(modaLista);
    

}