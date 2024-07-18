export default class Cl_empleado {
    constructor(nombre, sexo, edad) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = edad;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
}