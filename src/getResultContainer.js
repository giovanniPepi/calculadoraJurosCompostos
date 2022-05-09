import body from "./getBody";
import getResultTable from "./getResultTable";

const getResultContainer = () => {
  
  const resultContainer = document.createElement('section');
  resultContainer.setAttribute('class', 'resultContainer');
  
  const headerResult = document.createElement('header');
  headerResult.setAttribute('class', 'headerResult');
  headerResult.textContent = 'Resultados ';

  
  //appends

  resultContainer.appendChild(headerResult);

  body.appendChild(resultContainer);
}

export default getResultContainer;