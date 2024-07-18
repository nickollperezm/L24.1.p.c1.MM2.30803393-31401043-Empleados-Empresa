/*
Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
(F)emenino), edad. Se desea que determine e imprima: promedio de edad de los hombres y la
mayor edad entre las mujeres procesadas y quien la tiene.

Se dispone de los siguientes datos de varios empleados: (nombre, sexo, edad)
(Mary, ‘F’, 43), (José, ‘M’, 40), (Carlos, ‘M’, 30), (Pedro, ‘M’, 50), (Mery, ‘F’, 45), (Liz, ‘F’, 50)

Promedio de edad de los hombres: 36,66
Mayor edad entre las mujeres es: 50 y la tiene Liz
*/

import Cl_empresa from "./Cl_empresa.js";
import Cl_empleado from "./Cl_empleado.js";

let empresa = new Cl_empresa();
let empleado1 = new Cl_empleado("Mary", "F", 43);
let empleado2 = new Cl_empleado("José", "M", 40);
let empleado3 = new Cl_empleado("Carlos", "M", 30);
let empleado4 = new Cl_empleado("Pedro", "M", 50);
let empleado5 = new Cl_empleado("Mery", "F", 45);
let empleado6 = new Cl_empleado("Liz", "F", 50);
empresa.procesarEmpleado(empleado1);
empresa.procesarEmpleado(empleado2);
empresa.procesarEmpleado(empleado3);
empresa.procesarEmpleado(empleado4);
empresa.procesarEmpleado(empleado5);
empresa.procesarEmpleado(empleado6);

let salida = document.getElementById("salida");
salida.innerHTML = `
Promedio de edad de los hombres: ${empresa.promEdadHombres()}
<br>Mayor edad entre las mujeres es: ${empresa.mayorEdadMujer()} y la tiene ${empresa.nombreMayorMujer()}
`;