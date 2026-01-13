function classificarHeroi() {
    let nomeHeroi = document.getElementById("nomeHeroi").value.trim();
    let xpHeroi = Number(document.getElementById("xpHeroi").value);
    let resultado = document.getElementById("resultado");
    let nivel = "";

    if (!nomeHeroi || xpHeroi <= 0) {
        resultado.style.display = "block";
        resultado.innerHTML = "⚠️ Preencha corretamente o nome e o XP do herói.";
        return;
    }

    if (xpHeroi < 1000) nivel = "Ferro";
    else if (xpHeroi <= 2000) nivel = "Bronze";
    else if (xpHeroi <= 5000) nivel = "Prata";
    else if (xpHeroi <= 7000) nivel = "Ouro";
    else if (xpHeroi <= 8000) nivel = "Platina";
    else if (xpHeroi <= 9000) nivel = "Ascendente";
    else if (xpHeroi <= 10000) nivel = "Imortal";
    else nivel = "Radiante";

    resultado.style.display = "block";
    resultado.innerHTML =
        `O Herói de nome <strong>${nomeHeroi}</strong> está no nível de <strong>${nivel}</strong>`;
}