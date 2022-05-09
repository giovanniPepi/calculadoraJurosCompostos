import body from "./getBody";

const getCalcContainer = () => {

  const calcContainer = document.createElement('section');
  calcContainer.setAttribute('class', 'calcContainer');

  const labelPrincipal = document.createElement('label');
  labelPrincipal.setAttribute('class', 'labelCalc');
  labelPrincipal.setAttribute('id', 'labelPrincipal');
  labelPrincipal.setAttribute('for', 'inputPrincipal');
  labelPrincipal.textContent = 'Valor Inicial R$ ';

  const inputPrincipal = document.createElement('input');
  inputPrincipal.setAttribute('class', 'inputCalc');
  inputPrincipal.setAttribute('id', 'inputPrincipal');
  inputPrincipal.setAttribute('value', '');
  inputPrincipal.setAttribute('type', 'tel');
  inputPrincipal.setAttribute('placeholder', 'R$0,00');
  //accept only numbers as input
  inputPrincipal.setAttribute('onkeypress', "return event.charCode>=48 && event.charCode<=57");

  const labelAporte = document.createElement('label');
  labelAporte.setAttribute('class', 'labelCalc');
  labelAporte.setAttribute('id', 'labelAporte');
  labelAporte.setAttribute('for', 'inputAporte');
  labelAporte.textContent = 'Aporte R$ ';

  const inputAporte = document.createElement('input');
  inputAporte.setAttribute('class', 'inputCalc');
  inputAporte.setAttribute('id', 'inputAporte');
  inputAporte.setAttribute('value', '');
  inputAporte.setAttribute('type', 'tel');
  inputAporte.setAttribute('placeholder', 'R$0,00');
  inputAporte.setAttribute('onkeypress', "return event.charCode>=48 && event.charCode<=57");
  inputAporte.required = true;

  const labelTempo = document.createElement('label');
  labelTempo.setAttribute('class', 'labelCalc');
  labelTempo.setAttribute('id', 'labelTempo');
  labelTempo.setAttribute('for', 'inputTempo');
  labelTempo.textContent = 'Período  ';

  const inputTempo = document.createElement('input');
  inputTempo.setAttribute('class', 'inputCalc');
  inputTempo.setAttribute('id', 'inputTempo');
  inputTempo.setAttribute('value', '');
  inputTempo.setAttribute('type', 'number');
  inputTempo.setAttribute('placeholder', '0');
  inputTempo.setAttribute('onkeypress', "return event.charCode>=48 && event.charCode<=57");

  const selectionPeriodo  = document.createElement('select');
  selectionPeriodo.setAttribute('class', 'selectionPeriodo');
  selectionPeriodo.setAttribute('name', 'periodo');

  const periodo1 = document.createElement('option');
  periodo1.setAttribute('value', 'Ano');
  periodo1.textContent = 'Anos';

  const periodo2 = document.createElement('option');
  periodo2.setAttribute('value', 'Mes');
  periodo2.textContent = 'Meses';
  
  const labelTaxa = document.createElement('label');
  labelTaxa.setAttribute('class', 'labelCalc');
  labelTaxa.setAttribute('id', 'labelTaxa');
  labelTaxa.setAttribute('for', 'inputTaxa');
  labelTaxa.textContent = 'Taxa:  ';

  const inputTaxa = document.createElement('input');
  inputTaxa.setAttribute('class', 'inputCalc');
  inputTaxa.setAttribute('id', 'inputTaxa');
  inputTaxa.setAttribute('value', '');
  inputTaxa.setAttribute('type', 'tel');
  inputTaxa.setAttribute('placeholder', '0');
  inputTaxa.setAttribute('onkeypress', "return event.charCode>=48 && event.charCode<=57");

  const selectionTempo  = document.createElement('select');
  selectionTempo.setAttribute('class', 'selectionTempo');
  selectionTempo.setAttribute('name', 'periodoTaxa');

  const periodoTaxa1 = document.createElement('option');
  periodoTaxa1.setAttribute('value', 'anual');
  periodoTaxa1.textContent = 'Anual';

  const periodoTaxa2 = document.createElement('option');
  periodoTaxa2.setAttribute('value', 'mensal');
  periodoTaxa2.textContent = 'Mensal';
  
  const calcBtn = document.createElement('button');
  calcBtn.setAttribute('class', 'calcBtn');
  calcBtn.textContent = 'Calcular';

  const resetBtn = document.createElement('button');
  resetBtn.setAttribute('class', 'resetBtn');
  resetBtn.textContent = 'Limpar';

  //appends
  selectionTempo.appendChild(periodoTaxa1);
  selectionTempo.appendChild(periodoTaxa2);

  selectionPeriodo.appendChild(periodo1);
  selectionPeriodo.appendChild(periodo2);

  calcContainer.appendChild(labelPrincipal);
  calcContainer.appendChild(inputPrincipal);

  calcContainer.appendChild(labelAporte);
  calcContainer.appendChild(inputAporte);

  calcContainer.appendChild(labelTempo);
  calcContainer.appendChild(inputTempo);
  calcContainer.appendChild(selectionPeriodo);

  calcContainer.appendChild(labelTaxa);
  calcContainer.appendChild(inputTaxa);

  calcContainer.appendChild(selectionTempo);

  calcContainer.appendChild(calcBtn);
  calcContainer.appendChild(resetBtn);

  body.appendChild(calcContainer);
}

export default getCalcContainer;