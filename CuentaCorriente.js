import { Cliente } from "./Cliente.js";

export class cuentaCorriente {
  #cliente;
  agencia;
  numero;
  #saldo;
  static cantidadCuentas = 0;

  set cliente(valor) {
    if (valor instanceof Cliente) {
      this.#cliente = valor;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  constructor(cliente, agencia, numero) {
    this.cliente = cliente;
    this.agencia = agencia;
    this.numero = numero;
    this.#saldo = 0;
    cuentaCorriente.cantidadCuentas++;
  }

  depositoCuenta(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      return this.#saldo;
    }
  }

  retirarCuenta(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      return this.#saldo;
    }
  }

  verSaldo() {
    return this.#saldo;
  }

  transferirCuenta(valor, cuentaDestino) {
    this.retirarCuenta(valor);
    cuentaDestino.depositoCuenta(valor);
  }
}