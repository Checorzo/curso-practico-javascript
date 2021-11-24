const listaObjetos = [
    {
        curso: 'Ortografia',
        calificacion: 10,
        credito: 2
    },
    {
        curso: 'Matemáticas',
        calificacion: 8,
        credito: 5
    },
    {
        curso: 'Educacion fisica',
        calificacion: 7,
        credito: 5
    }
];
const listaLength = obternerCalificacion(listaObjetos).length;
function obternerCalificacion(listobj){
    
    const listaCalificacion= listobj.map(
        function(elemento){
            return elemento.calificacion;
        }
    );
    
return listaCalificacion;
}
function obternerCredito(listobj){
    
    const listaCredito = listobj.map(
        function(elemento){
            return elemento.credito;
        }
    );
return  listaCredito;
}

/* function productoCalificacionCredito(listaCal, listaCre){
    const listaProducto = [];
    for(let i= 0; i < listaLength; i++){
        listaProducto[i] = listaCal[i] * listaCre[i];
    }
    return listaProducto;
}

function sumaCredito(creditos){
    const totalCreditos = creditos.reduce(
        function (elementoAcumulado = 0, nuevoElemento){
            return elementoAcumulado += nuevoElemento;
        }
    )
    return totalCreditos;
}
function mediaPonderada(totalCal, totalCre){
        const mediaPon = totalCal / totalCre;
        return mediaPon;
}
function sumarProducto(prod){
    const sumaProducto = prod.reduce(
        function (elementoAcumulado = 0, nuevoElemento){
            return elementoAcumulado += nuevoElemento;
        }
    );
    return sumaProducto;
}
const cal = obternerCalificacion(listaObjetos);
const cre = obternerCredito(listaObjetos);
const totalCreditos = sumaCredito(cre);

const listaProducto = productoCalificacionCredito(cal,cre);

const sumaProducto = sumarProducto(listaProducto);

const mediaPon = mediaPonderada(sumaProducto, totalCreditos);
 */
function mediaPonderada(listaObjeto){
    const notaXcredito = listaObjeto.map(
        function(noteObjet){
            return noteObjet.calificacion * noteObjet.credito;
        }
    )
    const sumNotaXcredito = notaXcredito.reduce(
        function(acumulador, nuevoElemento){
            return acumulador += nuevoElemento;
        }
    )
    const creditos = listaObjeto.map(
        function(creditObjet){
            return creditObjet.credito;
        }
    )
    const sumCreditos = creditos.reduce(
        function(acumulador, nuevoElemento){
            return acumulador += nuevoElemento;
        }
    )
    const promedioPonderado = sumNotaXcredito / sumCreditos;
    return promedioPonderado;
}
console.log(
mediaPonderada(listaObjetos));
