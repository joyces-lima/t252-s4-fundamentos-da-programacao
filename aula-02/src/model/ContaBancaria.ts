import { salvarOuAtualizarConta } from "../persistencia/arquivo";

import { IContaBancaria } from './IContaBancaria'

class ContaBancaria implements IContaBancaria {
    numero: string;
    saldo: number;
    
}