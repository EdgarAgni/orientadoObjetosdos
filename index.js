/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Cuenta } from './Cuenta.js';
/*import {CuentaAhorro} from './CuentaAhorro.js';
import {CuentaCorriente} from './CuentaCorriente.js';*/

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new Cuenta(cliente, '1', '001', 0);
const cuentaDeMaria = new Cuenta(cliente2,'2','002', 0);

const cuentaAhorroLeonardo = new Cuenta(cliente, "3", "001", 0);

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(50);
console.log(cuentaDeLeonardo.verSaldo());

console.log(cuentaAhorroLeonardo);
cuentaAhorroLeonardo.depositoEnCuenta(500);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(20);
console.log(cuentaAhorroLeonardo.verSaldo());



