import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "../interfaces/VeiculoProps.js";

export class Moto extends Veiculo<MotoProps> {
    props: any;
    constructor(props: MotoProps) {
        super(props);
    }

    public getCilindradas(): number {
        return this.props.cilindradas;
    }

    public setCilindradas(novaCil: number): void {
        if (novaCil <= 0) {
            console.log("\n ERRO: Cilindrada inválida!");
            return;
        }
        this.props.cilindradas = novaCil;
    }

    public exibirDados(): void {
        console.log(`[MOTO] Marca: ${this.getMarca()} | Modelo: ${this.getModelo()} | Placa: ${this.getPlaca()} | Cilindradas: ${this.getCilindradas()}cc`);
    }
    getModelo() {
        throw new Error("Method not implemented.");
    }
    getMarca() {
        throw new Error("Method not implemented.");
    }
}