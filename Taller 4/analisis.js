/* HELPERS
saber si salariosSorted es par o impar */
function esPar(numerito){
    return (numerito % 2 === 0);
}

/* Funcion que calcula la media aritmetica de cualquier array de numeros */
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
        const personitaMitad = lista[mitad-1];
        return personitaMitad;
    }
}

/* Obtener solo los salario del array de mexico y guardarlos en el array salarios */
const salarios = mexico.map(
    function (persona){
        return persona.salary;
   }
);

/* Ordenar salarios de menor a mayor y guardalos en el array salaiorSorted */
const salariosSorted = salarios.sort(
    function( salaryA, salaryB){
        return salaryA - salaryB;
    }
);


const salarioCopia = salariosSorted.map(
    function(slr){
        return slr;
    }
);
/* Con esta función se calcula el top10 de los salarios
const spliceStart = salarios.length * 0.9;
const spliceCount = salarios.length - spliceStart;
const salariosTop10 = salarioCopia.splice( spliceStart, spliceCount); 

El unico problema que vi con esta solucion es que modifica el array los demas arrays*/

//Esta función tambien calcula el top 10 salarial
const start = salariosSorted[ salarios.length * 0.9];
const top10 = salariosSorted.filter(
    function(elemento){
        return elemento >= start;
    }
)

const medianaSalarialGnrl = medianaSalarial(salariosSorted);    
const medianaSalarialTop10 = medianaSalarial( top10 );


console.log({    
    medianaSalarialGnrl, 
    medianaSalarialTop10
}
);

