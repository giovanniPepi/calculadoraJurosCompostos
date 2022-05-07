import body from "./getBody";

const getCalcContainer = () => {

  const calcContainer = document.createElement('section');
  calcContainer.setAttribute('class', 'calcContainer');

  const labelValor = document.createElement('label');
  labelValor.setAttribute('class', 'labelCalc');
  labelValor.setAttribute('for', 'inputValor');
  labelValor.textContent = 'Aporte inicial R$ ';

  const inputValor = document.createElement('input');
  inputValor.setAttribute('class', 'inputCalc');
  inputValor.setAttribute('id', 'inputValor');
  inputValor.setAttribute('value', '0');
  inputValor.setAttribute('type', 'tel');

  const labelTempo = document.createElement('label');
  labelTempo.setAttribute('class', 'labelCalc');
  labelTempo.setAttribute('for', 'inputTempo');
  labelTempo.textContent = 'Tempo:  ';

  const inputTempo = document.createElement('input');
  inputTempo.setAttribute('class', 'inputCalc');
  inputTempo.setAttribute('id', 'inputTempo');
  inputTempo.setAttribute('value', '0');
  inputTempo.setAttribute('type', 'number');

  const selectionTempo  = document.createElement('select');
  selectionTempo.setAttribute('class', 'selectionTempo');
  selectionTempo.setAttribute('name', 'periodo');

  const periodoTaxa1 = document.createElement('option');
  periodoTaxa1.setAttribute('value', 'anual');
  periodoTaxa1.textContent = 'Anual';

  const periodoTaxa2 = document.createElement('option');
  periodoTaxa2.setAttribute('value', 'mensal');
  periodoTaxa2.textContent = 'Mensal';
  
  const labelTaxa = document.createElement('label');
  labelTaxa.setAttribute('class', 'labelTaxa');
  labelTaxa.setAttribute('for', 'inputTaxa');
  labelTaxa.textContent = 'Taxa:  ';

  const inputTaxa = document.createElement('input');
  inputTaxa.setAttribute('class', 'inputCalc');
  inputTaxa.setAttribute('id', 'inputTaxa');
  inputTaxa.setAttribute('value', '0');
  inputTaxa.setAttribute('type', 'number');

  const calcBtn = document.createElement('button');
  calcBtn.setAttribute('class', 'calcButton');
  calcBtn.textContent = 'Calcular';

  const resetBtn = document.createElement('button');
  resetBtn.setAttribute('class', 'resetBtn');
  resetBtn.textContent = 'Limpar';

  //appends
  selectionTempo.appendChild(periodoTaxa1);
  selectionTempo.appendChild(periodoTaxa2);

  calcContainer.appendChild(labelValor);
  calcContainer.appendChild(inputValor);

  calcContainer.appendChild(labelTempo);
  calcContainer.appendChild(inputTempo);

  calcContainer.appendChild(labelTaxa);
  calcContainer.appendChild(inputTaxa);

  calcContainer.appendChild(selectionTempo);

  calcContainer.appendChild(calcBtn);
  calcContainer.appendChild(resetBtn);

  body.appendChild(calcContainer);
}

export default getCalcContainer;