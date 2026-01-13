// Variáveis
let nomeHeroi = "Arthas";
let xpHeroi = 8500;
let nivel = "";

// Estrutura de decisão
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);

let herois = [
    { nome: "Arthas", xp: 8500 },
    { nome: "Jinx", xp: 1200 },
    { nome: "Ezreal", xp: 3000 },
    { nome: "Garen", xp: 10500 }
];

for (let heroi of herois) {
    let nivel = "";

    if (heroi.xp < 1000) nivel = "Ferro";
    else if (heroi.xp <= 2000) nivel = "Bronze";
    else if (heroi.xp <= 5000) nivel = "Prata";
    else if (heroi.xp <= 7000) nivel = "Ouro";
    else if (heroi.xp <= 8000) nivel = "Platina";
    else if (heroi.xp <= 9000) nivel = "Ascendente";
    else if (heroi.xp <= 10000) nivel = "Imortal";
    else nivel = "Radiante";

    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
