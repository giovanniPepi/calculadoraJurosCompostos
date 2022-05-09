import getCompoundInterest from "./getCompoundInterest";
import getResultTable from "./getResultTable";

const getEventListeners = () => {

    //gets form elements
    const inputPrincipal = document.querySelector("#inputPrincipal");
    const inputValor = document.querySelector('#inputValor');
    const inputTime = document.querySelector('#inputTempo');
    const inputTaxa = document.querySelector("#inputTaxa");
    const selectionTempo = document.querySelector('.selectionTempo');
    const selectionPeriod = document.querySelector('.selectionPeriodo');

    //calls the result and calculator function;
    const calcBtn = document.querySelector('.calcBtn');
    calcBtn.addEventListener('click', () => 
    getResultTable(getCompoundInterest(inputPrincipal.value, inputTime.value, inputTaxa.value, selectionPeriod.value, selectionTempo.value)));
}

export default getEventListeners;