import getCompoundInterest from "./getCompoundInterest";

const getEventListeners = () => {

    //gets form elements
    const inputPrincipal = document.querySelector("#inputPrincipal");
    const inputValor = document.querySelector('#inputValor');
    const inputTime = document.querySelector('#inputTempo');
    const inputTaxa = document.querySelector("#inputTaxa");
    const inputSelection = document.querySelector('.selectionTempo');

    //calls the calc function with the right paramaters
    const calcBtn = document.querySelector('.calcBtn');
    calcBtn.addEventListener('click', () => getCompoundInterest(inputPrincipal.value, inputTime.value, inputTaxa.value, inputSelection.value));
}

export default getEventListeners;