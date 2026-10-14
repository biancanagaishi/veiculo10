import { Carro } from "./src/models/Carro.js";
import { Moto } from "./src/models/Moto.js";
import { Veiculo } from "./src/models/Veiculo.js";

console.log("=== SISTEMA DE VEÍCULOS ===");

const meuCarro = new Carro({
    placa: "ABC-1234",
    modelo: "Civic",
    marca: "Honda",
    ano: 2022,
    qtdPortas: 4
});

const minhaMoto = new Moto({
    placa: "XYZ-5678",
    modelo: "CB 500F",
    marca: "Honda",
    ano: 2023,
    cilindradas: 500
});

console.log("\n--- DEMONSTRAÇÃO DE POLIMORFISMO ---");

// Array contendo a classe abstrata recebendo as subclasses instanciadas
const patioVeiculos: Veiculo[] = [meuCarro, minhaMoto];

// Executando o método polimórfico
for (const veiculo of patioVeiculos) {
    veiculo.exibirDados();
}
