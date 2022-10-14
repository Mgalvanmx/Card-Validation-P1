import validator from './validator.js';




const cardNumber = document.getElementById("cardNumber")
const botonValidar = document.getElementById("botonValidar")
const digitos = document.querySelector("#tarjeta .digitos")
const nombreth = document.querySelector("#tarjeta .nombreth")
const logoMarca = document.getElementById("logo-marca")

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

//* PASAR NÚMERO DE TARJETA

cardNumber.addEventListener('keyup', (e) => {
  let numeracion = e.target.value;

  cardNumber.value = numeracion 
//* ELIMINAR ESPACIOS EN BLANCO
.replace(/\s/g, '')
//* AGRUPAR NÚMEROS Y COLOCAR ESPACIO
.replace(/([0-9]{4})/g, '$1 ')
//* ELIMINA ULTIMO ESPACIO
.trim();

digitos.textContent = numeracion;

if(numeracion == ""){
  digitos.textContent = "0000 0000 0000 0000";
//* QUITAR EL LOGO DE LA TARJETA AL BORRAR NUM
logoMarca.innerHTML ="";  
}
//* RECONOCER VISA o MC
if(numeracion[0] == 4){
//* NO SE REPITA LOGO  
  logoMarca.innerHTML = "";
  const imagen = document.createElement("img");
  imagen.src = "Imagenes/VISA.png";
  logoMarca.appendChild(imagen);
} else if(numeracion[0] == 5){
  logoMarca.innerHTML = "";
  const imagen = document.createElement("img");
  imagen.src = "Imagenes/MC.png";
  logoMarca.appendChild(imagen);
} 

});

//* PASAR NOMBRE A TARJETA
nombreth.addEventListener('keyup', (e) => {
  let name = e.target.value;

nombreth.textContent = name;
 
});



 