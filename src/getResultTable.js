const getResultTable = () => {
  
  //example
  let result1 = [
    {ano: 1, valor: 1000},
    {ano: 2, valor: 2000},
    {ano: 3, valor: 3000},
    {ano: 4, valor: 4000},
    {ano: 5, valor: 5000},
    {ano: 6, valor: 6000},
  ]

  // table creation
  const table = document.createElement('table');
  //return object property names, iterate only through first obj
  let data = Object.keys(result1[0]);
   
  //table populating  
  //header
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

  generateTableHead(table, data);

  
  //appends

  const resultContainer = document.querySelector('.resultContainer');
  resultContainer.appendChild(table);


}

export default getResultTable;