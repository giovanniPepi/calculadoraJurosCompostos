import getResults from "./getResults";

const getEventListeners = () => {

    //gets form elements
    const inputPrincipal = document.querySelector("#inputPrincipal");
    const inputAporte = document.querySelector('#inputAporte');
    const inputTime = document.querySelector('#inputTempo');
    const inputTaxa = document.querySelector("#inputTaxa");
    const selectionTempo = document.querySelector('.selectionTempo');
    const selectionPeriod = document.querySelector('.selectionPeriodo');

    //calls the result and calculator function;
    const calcBtn = document.querySelector('.calcBtn');
    calcBtn.addEventListener('click', () => getResults(inputPrincipal.value, inputTime.value, inputTaxa.value, selectionPeriod.value, selectionTempo.value, inputAporte.value));
  }

export default getEventListeners;