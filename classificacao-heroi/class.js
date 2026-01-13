// ============================================
// 🎮 DESAFIO DIO - CLASSIFICADOR DE NÍVEL DE HERÓI
// ============================================

// ============================================
// SOLUÇÃO 1: ESTRUTURA IF/ELSE COMPLETA
// ============================================

function classificarHeroi(nome, xp) {
    let nivel;
    
    // Estrutura de decisão para classificar o nível
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    
    // Saída formatada
    return `O Herói de nome ${nome} está no nível de ${nivel}`;
}

// ============================================
// TESTES COM DIFERENTES HERÓIS
// ============================================

console.log("╔═══════════════════════════════════════════╗");
console.log("║  🎮 CLASSIFICADOR DE NÍVEL DE HERÓI 🎮   ║");
console.log("╚═══════════════════════════════════════════╝\n");

// Teste 1: Ferro
console.log("🗡️ TESTE 1:");
console.log(classificarHeroi("Arthur", 500));
console.log("XP: 500 (< 1.000)\n");

// Teste 2: Bronze
console.log("🗡️ TESTE 2:");
console.log(classificarHeroi("Lancelot", 1500));
console.log("XP: 1.500 (1.001 - 2.000)\n");

// Teste 3: Prata
console.log("🗡️ TESTE 3:");
console.log(classificarHeroi("Morgana", 3500));
console.log("XP: 3.500 (2.001 - 5.000)\n");

// Teste 4: Ouro
console.log("🗡️ TESTE 4:");
console.log(classificarHeroi("Merlin", 6000));
console.log("XP: 6.000 (5.001 - 7.000)\n");

// Teste 5: Platina
console.log("🗡️ TESTE 5:");
console.log(classificarHeroi("Excalibur", 7500));
console.log("XP: 7.500 (7.001 - 8.000)\n");

// Teste 6: Ascendente
console.log("🗡️ TESTE 6:");
console.log(classificarHeroi("Gandalf", 8500));
console.log("XP: 8.500 (8.001 - 9.000)\n");

// Teste 7: Imortal
console.log("🗡️ TESTE 7:");
console.log(classificarHeroi("Thor", 9500));
console.log("XP: 9.500 (9.001 - 10.000)\n");

// Teste 8: Radiante
console.log("🗡️ TESTE 8:");
console.log(classificarHeroi("Zeus", 15000));
console.log("XP: 15.000 (>= 10.001)\n");

// ============================================
// SOLUÇÃO 2: USANDO SWITCH/CASE COM RANGES
// ============================================

function classificarHeroiSwitch(nome, xp) {
    let nivel;
    
    // Determina a faixa de XP
    switch (true) {
        case (xp < 1000):
            nivel = "Ferro";
            break;
        case (xp >= 1001 && xp <= 2000):
            nivel = "Bronze";
            break;
        case (xp >= 2001 && xp <= 5000):
            nivel = "Prata";
            break;
        case (xp >= 5001 && xp <= 7000):
            nivel = "Ouro";
            break;
        case (xp >= 7001 && xp <= 8000):
            nivel = "Platina";
            break;
        case (xp >= 8001 && xp <= 9000):
            nivel = "Ascendente";
            break;
        case (xp >= 9001 && xp <= 10000):
            nivel = "Imortal";
            break;
        default:
            nivel = "Radiante";
    }
    
    return `O Herói de nome ${nome} está no nível de ${nivel}`;
}

// ============================================
// SOLUÇÃO 3: USANDO ARRAY DE OBJETOS (AVANÇADO)
// ============================================

function classificarHeroiAvancado(nome, xp) {
    const niveis = [
        { min: 0, max: 999, nome: "Ferro" },
        { min: 1000, max: 2000, nome: "Bronze" },
        { min: 2001, max: 5000, nome: "Prata" },
        { min: 5001, max: 7000, nome: "Ouro" },
        { min: 7001, max: 8000, nome: "Platina" },
        { min: 8001, max: 9000, nome: "Ascendente" },
        { min: 9001, max: 10000, nome: "Imortal" },
        { min: 10001, max: Infinity, nome: "Radiante" }
    ];
    
    const nivelEncontrado = niveis.find(nivel => xp >= nivel.min && xp <= nivel.max);
    
    return `O Herói de nome ${nome} está no nível de ${nivelEncontrado.nome}`;
}

// ============================================
// SOLUÇÃO 4: COM LAÇO DE REPETIÇÃO
// ============================================

function classificarVariosHerois(herois) {
    console.log("\n╔═══════════════════════════════════════════╗");
    console.log("║  🔄 CLASSIFICANDO MÚLTIPLOS HERÓIS 🔄    ║");
    console.log("╚═══════════════════════════════════════════╝\n");
    
    // Laço de repetição para processar vários heróis
    for (let i = 0; i < herois.length; i++) {
        const heroi = herois[i];
        const resultado = classificarHeroi(heroi.nome, heroi.xp);
        console.log(`${i + 1}. ${resultado}`);
    }
}

// Array com vários heróis
const listaHerois = [
    { nome: "Aragorn", xp: 8500 },
    { nome: "Legolas", xp: 9200 },
    { nome: "Gimli", xp: 7800 },
    { nome: "Frodo", xp: 950 },
    { nome: "Gandalf", xp: 12000 },
    { nome: "Sauron", xp: 15000 }
];

// Executar classificação de múltiplos heróis
classificarVariosHerois(listaHerois);

// ============================================
// SOLUÇÃO 5: INTERATIVA (SIMULAÇÃO DE INPUT)
// ============================================

function sistemaInterativo() {
    console.log("\n╔═══════════════════════════════════════════╗");
    console.log("║  🎯 SISTEMA INTERATIVO DE CLASSIFICAÇÃO  ║");
    console.log("╚═══════════════════════════════════════════╝\n");
    
    // Simulação de entrada de dados
    const heroisParaClassificar = [
        { nome: "Robin Hood", xp: 4500 },
        { nome: "Hércules", xp: 11000 },
        { nome: "Perseu", xp: 6500 }
    ];
    
    // Usar laço while para processar
    let index = 0;
    while (index < heroisParaClassificar.length) {
        const heroi = heroisParaClassificar[index];
        console.log(`📊 Processando herói ${index + 1}/${heroisParaClassificar.length}`);
        console.log(classificarHeroi(heroi.nome, heroi.xp));
        console.log(`${"=".repeat(45)}\n`);
        index++;
    }
}

sistemaInterativo();

// ============================================
// SOLUÇÃO 6: COM VALIDAÇÃO E TRATAMENTO DE ERROS
// ============================================

function classificarHeroiComValidacao(nome, xp) {
    // Validação de entrada
    if (typeof nome !== "string" || nome.trim() === "") {
        return "❌ Erro: Nome inválido! Deve ser uma string não vazia.";
    }
    
    if (typeof xp !== "number" || xp < 0) {
        return "❌ Erro: XP inválido! Deve ser um número positivo.";
    }
    
    // Classificação
    let nivel;
    
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    
    return `O Herói de nome ${nome} está no nível de ${nivel}`;
}

// Testes com validação
console.log("\n╔═══════════════════════════════════════════╗");
console.log("║  ✅ TESTES COM VALIDAÇÃO                  ║");
console.log("╚═══════════════════════════════════════════╝\n");

console.log(classificarHeroiComValidacao("Hermes", 5500));
console.log(classificarHeroiComValidacao("", 3000)); // Erro: nome vazio
console.log(classificarHeroiComValidacao("Poseidon", -100)); // Erro: XP negativo
console.log(classificarHeroiComValidacao(123, 5000)); // Erro: nome não é string

// ============================================
// TABELA DE REFERÊNCIA DE NÍVEIS
// ============================================

console.log("\n╔═══════════════════════════════════════════╗");
console.log("║  📊 TABELA DE NÍVEIS DE EXPERIÊNCIA      ║");
console.log("╚═══════════════════════════════════════════╝\n");

const tabelaNiveis = [
    { nivel: "Ferro", min: 0, max: 999 },
    { nivel: "Bronze", min: 1000, max: 2000 },
    { nivel: "Prata", min: 2001, max: 5000 },
    { nivel: "Ouro", min: 5001, max: 7000 },
    { nivel: "Platina", min: 7001, max: 8000 },
    { nivel: "Ascendente", min: 8001, max: 9000 },
    { nivel: "Imortal", min: 9001, max: 10000 },
    { nivel: "Radiante", min: 10001, max: "∞" }
];

tabelaNiveis.forEach((nivel, index) => {
    console.log(`${index + 1}. ${nivel.nivel.padEnd(12)} | XP: ${nivel.min.toString().padStart(6)} - ${nivel.max.toString().padEnd(6)}`);
});

// ============================================
// RESUMO DOS CONCEITOS UTILIZADOS
// ============================================

console.log("\n╔═══════════════════════════════════════════╗");
console.log("║  📚 CONCEITOS DE PROGRAMAÇÃO UTILIZADOS  ║");
console.log("╚═══════════════════════════════════════════╝");
console.log("\n✅ Variáveis:");
console.log("   • let, const - Declaração de variáveis");
console.log("\n✅ Operadores:");
console.log("   • Comparação: <, >, <=, >=, ===, &&");
console.log("   • Aritméticos: +, -, *, /");
console.log("\n✅ Estruturas de Decisão:");
console.log("   • if/else if/else");
console.log("   • switch/case");
console.log("   • Operador ternário");
console.log("\n✅ Laços de Repetição:");
console.log("   • for - Loop com contador");
console.log("   • while - Loop com condição");
console.log("   • forEach - Iteração em arrays");
console.log("\n✅ Estruturas de Dados:");
console.log("   • Arrays - Listas de dados");
console.log("   • Objetos - Estruturas complexas");
console.log("\n✅ Funções:");
console.log("   • Declaração e chamada de funções");
console.log("   • Parâmetros e retorno de valores");