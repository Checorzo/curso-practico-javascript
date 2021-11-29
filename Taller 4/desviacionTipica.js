/* HELPERS
saber si salariosSorted es par o impar */
function esPar(numerito){
    return (numerito % 2 === 0);
}

/* Obtener solo los salario del array de mexico y guardarlos en el array salarios 
const salarios = mexico.map(
    function (personita){
        return personita.salary;
    }
);

/* Ordenar salarios de menor a mayor y guardalos en el array salaiorSorted 
const salariosSorted = salarios.sort(
    function( salaryA, salaryB){
        return salaryA - salaryB;
    }
);

Funcion que calcula la media aritmetica de cualquier array de numeros */
function calcularMediaAritmetica(lista){
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumalista / lista.length;
    return promedioLista;
}

/* Calcular la mediana salarial de la lista ordenada */
function medianaSalarial(lista){
    const mitad = Math.ceil(lista.length / 2 );

    if( esPar(lista.length)){
        const personitaMitad1 = mitad - 1;
        const personitaMitad2 = mitad;
        
        const mediana = calcularMediaAritmetica([lista[personitaMitad1],lista[ personitaMitad2]]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad - 1];
        return personitaMitad;
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

/* Esta función tambien calcula el top 10 salarial
const start = salariosSorted[ parseInt( salarios.length * 0.9 )];
const salariosTop10 = salariosSorted.filter(
    function(elemento){
        return elemento >= start;
    }
) */
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

function imprimirModa(lista){
    const modaImpresa = [];

    for(let i = 0; i < lista.length ; i++){
        modaImpresa[i] = lista[i][0];
    }
    return modaImpresa;
}

function calcularDeviacionEstandar(lista){
    
    const start = lista[ parseInt( lista.length * 0.9 )];
    const salariosTop10 = lista.filter(
    function(elemento){
        return elemento >= start;
        }
    )

    /* Calcular la varianza de los salarios */
    const mediaSalarial = calcularMediaAritmetica( lista );

    const salarioMenosMediaParaVarianza = lista.map(
        function(personita){
            return ((personita - mediaSalarial)*(personita - mediaSalarial));
        }
    )

    const sumatoriaParaVarianza = salarioMenosMediaParaVarianza.reduce(
        function(acumulador, nuevoValor){
            return acumulador += nuevoValor;
        }
    );
    const sumatoriaParaVarianzaEntreN = sumatoriaParaVarianza / lista.length;

    const desviacionStd = Math.pow(sumatoriaParaVarianzaEntreN, 1/2);

    return desviacionStd;

}

function onClickCalcularDesviacionEstandar(){
    const listaNum = document.getElementById("inputNumero");
    const listaNumStr = listaNum.value;

    const listaNumero = listaNumStr.split(",").map(
        function( numero ){
            return parseInt(numero);
        }
    );

    const salariosSorted = ordenarLista(listaNumero);

    const start =  salariosSorted.length * 0.9;
    const top10 = salariosSorted.filter(
        function(elemento){
            return elemento >= salariosSorted[parseInt(start)];
        }
    )
    console.log(top10);

    const listaOrd = document.getElementById('lista');
    listaOrd.innerText = "Lista ordenada de menor a mayor: " + salariosSorted;


    const modaLista = calcularModa( salariosSorted );
    const modaOutPut = document.getElementById('moda');
    modaOutPut.innerText = "La moda de la serie de numero es: " + imprimirModa( modaLista );

    const medianaSalarialGnrl = medianaSalarial(salariosSorted);
    const medianaSalarialOutPut = document.getElementById('medianaSalarial');
    medianaSalarialOutPut.innerText = "La mediana de la serie de numero es: " + medianaSalarialGnrl;

    const medianaSalarialTop10 = medianaSalarial( top10 );
    const medianaSalarialTop10OutPut = document.getElementById('medianaSalarialTop10');
    medianaSalarialTop10OutPut.innerText = "La mediana top 10 de la serie de numero es: " + medianaSalarialTop10;

    const desviacionEstandar = calcularDeviacionEstandar(salariosSorted);  

    const resultP = document.getElementById('resultP');
    resultP.innerText = "La desviación estandar de la serie de numero es: " + desviacionEstandar.toFixed(2);
 
}