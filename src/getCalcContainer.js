import body from "./getBody";

const getCalcContainer = () => {

  const calcContainer = document.createElement('section');
  calcContainer.setAttribute('class', 'calcContainer');

  const labelInicial = document.createElement('label');
  labelInicial.setAttribute('class', 'labelCalc');
  labelInicial.setAttribute('for', 'inputInicial');
  labelInicial.textContent = 'Valor Inicial R$ ';

  const inputInicial = document.createElement('input');
  inputInicial.setAttribute('class', 'inputCalc');
  inputInicial.setAttribute('id', 'inputInicial');
  inputInicial.setAttribute('value', '0');
  inputInicial.setAttribute('type', 'tel');
  inputInicial.setAttribute('onkeypress', "return event.charCode>=48 && event.charCode<=57");

  const labelValor = document.createElement('label');
  labelValor.setAttribute('class', 'labelCalc');
  labelValor.setAttribute('for', 'inputValor');
  labelValor.textContent = 'Aporte R$ ';

  const inputValor = document.createElement('input');
  inputValor.setAttribute('class', 'inputCalc');
  inputValor.setAttribute('id', 'inputValor');
  inputValor.setAttribute('value', '0');
  inputValor.setAttribute('type', 'tel');
  inputValor.setAttribute('onkeypress', "return event.charCode>=48 && event.charCode<=57");
  inputValor.required = true;

  const labelTempo = document.createElement('label');
  labelTempo.setAttribute('class', 'labelCalc');
  labelTempo.setAttribute('for', 'inputTempo');
  labelTempo.textContent = 'Tempo:  ';

  const inputTempo = document.createElement('input');
  inputTempo.setAttribute('class', 'inputCalc');
  inputTempo.setAttribute('id', 'inputTempo');
  inputTempo.setAttribute('value', '0');
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
  inputTaxa.setAttribute('value', '0');
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

  calcContainer.appendChild(labelInicial);
  calcContainer.appendChild(inputInicial);

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