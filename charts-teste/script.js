let dados = {
  ibge: [
    { cidade: "Serra", populacao: 517510 },
    { cidade: "Vila Velha", populacao: 493838 },
    { cidade: "Cariacica", populacao: 381285 },
    { cidade: "Vitória", populacao: 362097 },
    { cidade: "Cach. Itapemirim", populacao: 208972 },
    { cidade: "Linhares", populacao: 173555 },
    { cidade: "São Mateus", populacao: 130611 },
    { cidade: "Guarapari", populacao: 124859 },
    { cidade: "Colatina", populacao: 122499 },
    { cidade: "Aracruz", populacao: 101220 },
  ],
};

//Obtendo as labels de cidades
let cidades = dados.ibge.map((obj) => obj.cidade);
console.log(cidades);

//Obtendo os dados da população
let populacao = dados.ibge.map((obj) => obj.populacao);
console.log(populacao);

let myChart = document.getElementById("myChart").getContext("2d");

//Gráfico em barras vertical
let chart = new Chart(myChart, {
  type: "bar",
  data: {
    labels: cidades,
    datasets: [
      {
        label: "População",
        data: populacao,
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderWidth: 1,
        borderColor: "#777",
        hoverBorderWidth: 3,
        hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "As 10 Cidades mais Populosas do Espírito Santo - Brasil ",
      fontSize: 20,
    },
    legend: {
      display: false,
      labels: {
        fontColor: "#777",
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
