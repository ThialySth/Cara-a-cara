function toggleSelection(element) {
    element.classList.toggle('selected');
}

document.addEventListener("DOMContentLoaded", function() {
    // Array de nomes de famosos
    var nomesFamosos = [
      "Xuxa",
      "Cirilo",
      "Matuê",
      "Zeca",
      "Estevão Ferreira",
      "ET Bilu",
      "Miranha",
      "Pabllo Vittar",
      "Bolsonaro",
      "Lula",
      "Chico Moedas",
      "Casimiro",
      "Marília Mendonça",
      "Wagner Moura",
      "Alanzoka",
      "Batman",
      "Léo Lins",
      "Pablo Escobar",
      "Manoel Gomes",
      "Muzy",
      "Tiringa",
      "Jesus",
      "Hitler",
      "Tereza"
    ];
  
    // Seleciona um nome aleatório do array
    var nomeAleatorio = nomesFamosos[Math.floor(Math.random() * nomesFamosos.length)];
  
    // Atualiza o texto na página HTML
    document.getElementById("nomeFamoso").textContent = nomeAleatorio;
  });
  