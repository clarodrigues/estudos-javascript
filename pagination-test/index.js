/*
Criar a Tabela Dinamica
  - Criar o table head dinamicamente
  - Criar a paginação de acordo com parametros
  - Exibir os registros
  - Exibir a barra de botões
*/

var $ = document.querySelector.bind(document);

let data = {
  tableRows: [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    {
      name: "Monte Falterona",
      height: 1654,
      place: "Parco Foreste Casentinesi",
    },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" },
  ],
  headers: ["Nome", "Altura", "Local"],
};

let headers = data.headers;

let table = $("table");
let thead = generateTableHead(table, data.headers);
let tbody = generateTableBody(table, data.tableRows);

function generateTableHead(table, headers) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  headers.forEach((header) => {
    let th = document.createElement("th");
    let text = document.createTextNode(header);
    th.appendChild(text);
    row.appendChild(th);
  });
}

function generateTableBody(table, tableRows) {
  let tbody = table.createTBody();
  for (let row of tableRows) {
    let th = tbody.insertRow();
    for (key in row) {
      console.log(row[key])
      let cell = th.insertCell();
      let text = document.createTextNode(row[key]);
      cell.appendChild(text);
    }
  }
}
