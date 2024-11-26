const nomeHeroi = prompt("Digite o nome do herói:");
const xpHeroi = parseInt(prompt("Digite a quantidade de XP do herói:"));

const nivel = xpHeroi < 1000 ? "Ferro"
    : xpHeroi <= 2000 ? "Bronze"
    : xpHeroi <= 5000 ? "Prata"
    : xpHeroi <= 7000 ? "Ouro"
    : xpHeroi <= 8000 ? "Platina"
    : xpHeroi <= 9000 ? "Ascendente"
    : xpHeroi <= 10000 ? "Imortal"
    : "Radiante";

alert(`O herói ${nomeHeroi} possui ${xpHeroi} de XP e está no nível ${nivel}.`);