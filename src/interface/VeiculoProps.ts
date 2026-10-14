export interface VeiculoProps {
    placa: string;
    modelo: string;
    marca: string;
    ano: number;
}

export interface CarroProps extends VeiculoProps {
    qtdPortas: number;
}

export interface MotoProps extends VeiculoProps {
    cilindradas: number;
}