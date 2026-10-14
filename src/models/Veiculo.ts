import { VeiculoProps } from "../interfaces/VeiculoProps.js";

export abstract class Veiculo<T extends VeiculoProps = VeiculoProps> {
    constructor(protected props: T) {}

    public getPlaca(): string {
        return this.props.placa;
    }

    public getModelo(): string {
        return this.props.modelo;
    }

    public getMarca(): string {
        return this.props.marca;
    }

    public getAno(): number {
        return this.props.ano;
    }

    public setPlaca(novaPlaca: string): void {
        if (novaPlaca.trim().length === 0) {
            console.log("\n ERRO: A placa não pode ser vazia!");
            return;
        }
        this.props.placa = novaPlaca;
    }

    public setModelo(novoModelo: string): void {
        if (novoModelo.trim().length === 0) {
            console.log("\n ERRO: O modelo não pode ser vazio!");
            return;
        }
        this.props.modelo = novoModelo;
    }

    public setMarca(novaMarca: string): void {
        if (novaMarca.trim().length === 0) {
            console.log("\n ERRO: A marca não pode ser vazia!");
            return;
        }
        this.props.marca = novaMarca;
    }

    public setAno(novoAno: number): void {
        if (novoAno <= 0) {
            console.log("\n ERRO: Ano inválido!");
            return;
        }
        this.props.ano = novoAno;
    }

    public abstract exibirDados(): void;
}

