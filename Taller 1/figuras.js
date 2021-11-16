//Código del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//C{odigo del triángulo

console.group("Triángulos");

/* const ladoTriangulo1 = 6;

const ladoTriangulo2 = 6;

const baseTriangulo = 4;

console.log( //Identación para tener un código mas legible
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm " 
    + ladoTriangulo2 
    + "cm " 
    + baseTriangulo 
    + "cm"
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
 */function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

/* console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm");

const alturaTraingulo = 5.5;
console.log("Altura del triángulo: " + alturaTraingulo + "cm");

const areaTriangulo = ( baseTriangulo * alturaTraingulo ) / 2;
 */
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log("El aŕea del triángulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del círculo

console.group("Círculos");

/* const radioCirculo = 4;

const diametroCirculo = radioCirculo *2;
 */
function diametroCirculo(radio){
    return radio * 2;
}

/* console.log(
    "El radio del círculo mide: " 
    + radioCirculo 
    + "cm \n"
    + "El díametro del circulo es: " 
    + diametroCirculo 
    + "cm"
);
 */
const pi = Math.PI;

// const perimetroCirculo = diametroCirculo * pi;
function perimetroCirculo(radio){
    const perimetro = diametroCirculo(radio);
    return perimetro * pi;
}
// console.log("El peíimetro del círculo es de: " + perimetroCirculo + "cm")

// const areaCirculo = (radioCirculo * radioCirculo) * pi;
function areaCirculo(radio){
    return ( radio * radio ) * pi;
}
// console.log("El área del circulo es de: " + areaCirculo + "cm^2");

console.groupEnd();


//Aqui interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("lado1");
    const lado1 = parseInt(input1.value);

    const input2 = document.getElementById("lado2");
    const lado2 = parseInt(input2.value);

    const input3 = document.getElementById("lado3");
    const lado3 = parseInt(input3.value);


    const perimetro = perimetroTriangulo(lado1, lado2, lado3);
    alert(perimetro);
}
//Triángulo
function calcularAreaTriangulo(){
    const input1 = document.getElementById("lado3");
    const base = parseInt(input1.value);

    const input2 = document.getElementById("altura");
    const altura = parseInt(input2.value);

    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio =parseInt(input.value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}
//Círculo
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio =parseInt(input.value);

    const area = areaCirculo(radio);
    alert(area);
}