import validator from './validator.js';




const cardNumber = document.getElementById("cardNumber")
const botonValidar = document.getElementById("botonValidar")

botonValidar.addEventListener("click", function(){
if (cardNumber.value.length <16){
  alert ("Por favor ingresa la numeración de tu tarjeta para continuar");
}else {
    let validation = validator.isValid(cardNumber.value)
    let maskedNumber = validator.maskify(cardNumber.value)
    cardNumber.value = maskedNumber
    if (validation){
      alert ("Tarjeta Valida")
      } else {
        alert ("Tarjeta Invalida")
      }
} })



 