function searchTableHome() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  table = document.querySelector(".table");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (var j = 0; j < td.length; j++) {
      var cell = td[j];
      if (cell) {
        txtValue = cell.textContent || cell.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}

function searchTableTreinos() {
  var input, filter, table, tr, td, i, j, txtValue;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();

  // Obtém todas as tabelas no documento
  var tables = document.querySelectorAll("table");

  // Itera por todas as tabelas
  for (i = 0; i < tables.length; i++) {
    table = tables[i];
    tr = table.getElementsByTagName("tr");

    // Itera por todas as linhas da tabela
    for (j = 0; j < tr.length; j++) {
      td = tr[j].getElementsByTagName("td");

      // Verifica se qualquer célula da linha contém o texto pesquisado
      var rowMatches = false;
      for (var k = 0; k < td.length; k++) {
        var cell = td[k];
        if (cell) {
          txtValue = cell.textContent || cell.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            rowMatches = true;
            break; // Se uma célula combinar, não é necessário verificar as outras
          }
        }
      }

      // Exibe ou oculta a linha com base no resultado da pesquisa
      if (rowMatches) {
        tr[j].style.display = "";
      } else {
        tr[j].style.display = "none";
      }
    }
  }
}
