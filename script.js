let jogadores = [
    {
        nome: "Paula",
        status: "Ativo",
    },
    {
        nome: "Joana",
        status: "Ativo",
    },
    {
        nome: "Jeff",
        status: "Inativo",
    },
    {
        nome: "Duda",
        status: "Ativo",
    },
];

for (let i = 0; i < jogadores.length; i++) {
  if (jogadores[i].status == "Ativo") {
    console.log(jogadores[i].nome);
  }
}