import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta { //estensión de la clase cuenta.js
       constructor(cliente, numero, agencia) {
        super(cliente,numero,agencia,0); // adicional del constructor d ela clase cuenta
        CuentaCorriente.cantidadCuentas++;
    }
    retirarDeCuenta(valor, comision) {
            super.retirarDeCuenta(valor, 5);
    }
}