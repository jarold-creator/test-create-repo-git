var Numero1 = prompt("Ingrese un numero ", " ingrese aqui")
var Numero2 = prompt("Ingrese segundo numero ", "ingrese aqui")

var Numero1 = parseInt(Numero1)
var Numero2 = parseInt(Numero2)

if (Numero1 > Numero2) {
    document.write("El primer numero que ingreso es mayor");
} else if (Numero1 < Numero2) {
    document.write("El segundo numero que ingreso es mayor");
}