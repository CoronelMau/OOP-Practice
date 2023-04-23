//Definición de clases
import { cuentaCorriente } from "./CuentaCorriente.js";
import { Cliente } from "./Cliente.js";

const cliente = new Cliente("Mau", "12341234");
const cliente2 = new Cliente("Astrid", "51234123");


const cuentaMau = new cuentaCorriente(cliente, "1", "001");
const cuentaAstrid = new cuentaCorriente(cliente2, "2", "002");

console.log(cuentaCorriente.cantidadCuentas);



//Transferencia de Saldo
let saldo = cuentaMau.verSaldo();
//console.log("El saldo actual es: " + saldo);

saldo = cuentaMau.depositoCuenta(400);
//console.log("El saldo actual de Mau es: " + saldo);

cuentaMau.transferirCuenta(100, cuentaAstrid);
const saldoAstrid = cuentaAstrid.verSaldo();
//console.log("El saldo de Astrid es: " + saldoAstrid);

const saldoMau = cuentaMau.verSaldo();
//console.log("El saldo de Mau es: " + saldoMau); 