const getResultTable = (resultArray) => {
  
  // table creation
  const table = document.createElement('table');
  
  //return object property names, iterate only through first obj
  let data = Object.keys(resultArray[0]);
   
  //table populating  
  const generateTableHead = (table, data) => {
    let thead = table.createTHead();
    let row = thead.insertRow();
  
    for (let key of data) {
      let th = document.createElement('th');
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  //rows
  const generateTable = (table, data) => {
    for (let element of data) {
      let row = table.insertRow();
      let keys = Object.keys(element);
      
      keys.forEach((key => {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      })) 
    }
  }

  generateTable(table, resultArray);
  generateTableHead(table, data);
  
  //appends
  const resultContainer = document.querySelector('.resultContainer');
  resultContainer.appendChild(table);
}

export default getResultTable;