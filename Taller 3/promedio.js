function calcularMediaAritmetica(lista){
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumalista / lista.length;
    return promedioLista;
}

function onClickCalcularMediaAritmetica(){
    const inputNumero = document.getElementById("inputNumero");
    const numeroStr = inputNumero.value;

    const nuevaLista = numeroStr.split(',').map(
        function(elemento){
            //Con .map tambien podemos hacer convercion de tipo de datos
            return parseInt(elemento);
        });
    console.log(nuevaLista);
        
    const promedio = calcularMediaAritmetica(nuevaLista);
    console.log(promedio);
    const resultP = document.getElementById('resultP');
    resultP.innerText = "El promedio de los numeros ingresado es: " + promedio;
}
