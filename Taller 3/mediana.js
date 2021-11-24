function calcularMediaAritmetica(lista){
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumalista / lista.length;
    return promedioLista;
}

function esPar(mitad){
    if(mitad % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function ordenarLista(lista){
    const listaOrdenada = lista.sort(
        function(value1, value2){
            return value1 - value2;
        }  
      )
    return lista;
}

function calcularMediana(lista){
    //Funcion que ordena la lista de acuerdo el valor numerico
    
    const mitadDeLista = Math.ceil(lista.length / 2);
    const listaOrdenada = ordenarLista(lista);

    let mediana;

    if(esPar(lista.length)){
        const elemento1 = listaOrdenada[mitadDeLista - 1];
        const elemento2 = listaOrdenada[mitadDeLista];

        mediana = calcularMediaAritmetica([elemento1,elemento2]);
        console.log(listaOrdenada);
        return mediana;

    }else{
        mediana = listaOrdenada[mitadDeLista-1];
        console.log(listaOrdenada);
        return mediana;
}

}

function onClickCalcularMedianaAritmetica(){
    const inputNumero = document.getElementById("inputNumero");
    const numeroStr = inputNumero.value;

    const nuevaLista = numeroStr.split(',').map(
        function(elemento){
            //Con .map tambien podemos hacer convercion de tipo de datos
            return parseInt(elemento);
        });

        
    const mediana = calcularMediana(nuevaLista);
    console.log(mediana);
   
    const listaOrd = document.getElementById('lista');
    listaOrd.innerText = "Lista ordenada de menor a mayor: " + ordenarLista(nuevaLista);
    
    const resultP = document.getElementById('resultP');
    resultP.innerText = "El promedio de los numeros ingresado es: " + mediana;
}