import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta { //estensión de la clase cuenta

    constructor(cliente, numero, agencia, saldo) {
        super(cliente,numero,agencia,saldo); //adicional al constructor de la clase cuenta
    }

    retirarDeCuenta(valor, comision) {
            super.retirarDeCuenta(valor, 1); // con super estamos llamando la operación original para no repetir tanto el codigo y entrar en posibles errores por valores ocultos o privados
    }
    
}
