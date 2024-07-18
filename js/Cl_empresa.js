export default class Cl_empresa {
    constructor() {
        this.acumEdadHombres = 0;
        this.contHombres = 0;
        this.mayorEdadMujeres = 0;
        this.nombreMujer = "";
    }

    procesarEmpleado(empleado) {
        if (empleado.sexo == "M") {
            this.acumEdadHombres += empleado.edad;
            this.contHombres++;
        } else if (empleado.sexo == "F") {
            if (empleado.edad > this.mayorEdadMujeres) {
                this.mayorEdadMujeres = empleado.edad;
                this.nombreMujer = empleado.nombre;
            }
        }
    }

    promEdadHombres() {
        return this.acumEdadHombres / this.contHombres;
    }

    mayorEdadMujer() {
        return this.mayorEdadMujeres;
    }

    nombreMayorMujer() {
        return this.nombreMujer;
    }
}