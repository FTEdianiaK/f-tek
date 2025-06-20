function alignTables() {
    let i, j, k;
    const tables = document.getElementsByTagName('table');
    for (i = 0; i < tables.length; i++) {
        tables[i].className = 'w3-table-all w3-text-black';
        tables[i].style.width = '90%';
        tables[i].style.margin = 'auto';

        const rows = tables[i].rows;

        rows[0].className = 'w3-black';
        const header = rows[0].getElementsByTagName('th');
        for (j = 0; j < header.length; j++) {
            header[j].setAttribute('onclick','sortTable(parentElement.parentElement.parentElement.id,' + j.toString() + ')')
        }
        for (j = 1; j < header.length; j++) {
            header[j].classList.add('w3-right-align');
        }

        for (j = 1; j < rows.length; j++) {
            let cells = rows[j].getElementsByTagName('td');
            for (k = 1; k < cells.length; k++) {
                cells[k].classList.add('w3-right-align');
            }
        }
    }
}

function sortTable(t, n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(t);
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', alignTables());

