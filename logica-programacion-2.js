let celsius = prompt("Ingresa una cifra de temperatura en grados celsius: ");

while (isNaN(celsius)) {
    celsius = prompt("Error. Por favor ingrese la temperatura en grados Celsius como un número: ");
}
celsius = parseFloat(celsius);

function convertidor(a){
    kelvin = a + 273;
    fahrenheit = (a*9/5) + 32;
    return console.log("La temperatura que ingresaste equivale a " + kelvin + "°K y a " + fahrenheit + "°F.")
}

convertidor(celsius);