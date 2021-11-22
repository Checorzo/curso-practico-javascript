const coupons = [
    {
        name: "xxxxxxxx",
        discount:15
    },
    {
        name: "yyyyyyyy",
        discount:30
    },
    {
        name: "zzzzzzzz",
        discount: 25
    }
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio *porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPrice(){
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discount = inputDiscount.value;
    

    const precioConDescuento = calcularPrecioConDescuento(price,discount);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
 }

//Decuento con cupones
 function onClickButtonCupon(precio,cupon){
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    
    const isCuponValueValid = function(coupon){
        return coupon.name === couponValue;
    }
    
    const userCoupon = coupons.find(isCuponValueValid);

if( !userCoupon){
    alert("El cupón " + userCoupon + " no es valido");
} else{

    const descuento = userCoupon.discount;
    const precioConCupon = calcularPrecioConDescuento(price, descuento);
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConCupon;
}


 }