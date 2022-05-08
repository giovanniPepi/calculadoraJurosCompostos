import body from "./getBody";

const getCalcContainer = () => {

  const calcContainer = document.createElement('section');
  calcContainer.setAttribute('class', 'calcContainer');

  const labelPrincipal = document.createElement('label');
  labelPrincipal.setAttribute('class', 'labelCalc');
  labelPrincipal.setAttribute('for', 'inputPrincipal');
  labelPrincipal.textContent = 'Valor Principal R$ ';

  const inputPrincipal = document.createElement('input');
  inputPrincipal.setAttribute('class', 'inputCalc');
  inputPrincipal.setAttribute('id', 'inputPrincipal');
  inputPrincipal.setAttribute('value', '');
  inputPrincipal.setAttribute('type', 'tel');
  //accept only numbers as input
  inputPrincipal.setAttribute('onkeypress', "return event.charCode>=48 && event.charCode<=57");

  const labelValor = document.createElement('label');
  labelValor.setAttribute('class', 'labelCalc');
  labelValor.setAttribute('for', 'inputValor');
  labelValor.textContent = 'Aporte R$ ';

  const inputValor = document.createElement('input');
  inputValor.setAttribute('class', 'inputCalc');
  inputValor.setAttribute('id', 'inputValor');
  inputValor.setAttribute('value', '');
  inputValor.setAttribute('type', 'tel');
  inputValor.setAttribute('onkeypress', "return event.charCode>=48 && event.charCode<=57");
  inputValor.required = true;

  const labelTempo = document.createElement('label');
  labelTempo.setAttribute('class', 'labelCalc');
  labelTempo.setAttribute('for', 'inputTempo');
  labelTempo.textContent = 'Período  ';

  const inputTempo = document.createElement('input');
  inputTempo.setAttribute('class', 'inputCalc');
  inputTempo.setAttribute('id', 'inputTempo');
  inputTempo.setAttribute('value', '');
  inputTempo.setAttribute('type', 'tel');
  inputTempo.setAttribute('onkeypress', "return event.charCode>=48 && event.charCode<=57");

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
  inputTaxa.setAttribute('value', '');
  inputTaxa.setAttribute('type', 'tel');
  inputTaxa.setAttribute('onkeypress', "return event.charCode>=48 && event.charCode<=57");

  const calcBtn = document.createElement('button');
  calcBtn.setAttribute('class', 'calcBtn');
  calcBtn.textContent = 'Calcular';

  const resetBtn = document.createElement('button');
  resetBtn.setAttribute('class', 'resetBtn');
  resetBtn.textContent = 'Limpar';

  //appends
  selectionTempo.appendChild(periodoTaxa1);
  selectionTempo.appendChild(periodoTaxa2);

  calcContainer.appendChild(labelPrincipal);
  calcContainer.appendChild(inputPrincipal);

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