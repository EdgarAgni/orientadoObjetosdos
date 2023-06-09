/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Cuenta } from './Cuenta.js';//usamos solo una clase para evitar repetirla, total todo es igual
import {CuentaAhorro} from './CuentaAhorro.js'; // esta clase se complementa con la de cuenta,js
import {CuentaCorriente} from './CuentaCorriente.js'; // esta clase se complementa con la de cuenta,js

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente (cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente (cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro (cliente, "001",0,0);

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

