import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "../interfaces/VeiculoProps.js";

export class Carro extends Veiculo<CarroProps> {
    props: any;
    constructor(props: CarroProps) {
        super(props);
    }

    public getQtdPortas(): number {
        return this.props.qtdPortas;
    }

    public setQtdPortas(novaQtd: number): void {
        if (novaQtd <= 0) {
            console.log("\n ERRO: Quantidade de portas inválida!");
            return;
        }
        this.props.qtdPortas = novaQtd;
    }

    public exibirDados(): void {
        console.log(`[CARRO] Marca: ${this.getMarca()} | Modelo: ${this.getModelo()} | Placa: ${this.getPlaca()} | Portas: ${this.getQtdPortas()}`);
    }
    getModelo() {
        throw new Error("Method not implemented.");
    }
    getMarca() {
        throw new Error("Method not implemented.");
    }
}
