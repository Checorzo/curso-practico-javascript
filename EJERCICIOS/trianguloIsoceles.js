function alturaTriangulo(lado, base){
    const altura = Math.sqrt((Math.pow(lado, 2)+(Math.pow(base, 2))));
    return altura;
}

//Aqui interactuamos con el HTML

function calcularAlturaTriangulo(){
    
    const input1 = document.getElementById("ladoA");
    const ladoA = parseInt(input1.value);

    const input2 = document.getElementById("ladoB");
    const ladoB = parseInt(input2.value);

    const input3 = document.getElementById("base");
    const base = parseInt(input3.value) / 2;

    if(ladoA === ladoB){
        const lado = ladoA;
        const altura = alturaTriangulo(lado, base);
        alert(altura.toPrecision(4));

    }
    else{
        alert("este no es un Trángulo Isóceles");
    }
    
}
