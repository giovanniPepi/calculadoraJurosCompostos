const getEventListeners = () => {

    //gets form elements
    const inputValor = document.querySelector('#inputValor');
    const inputTime = document.querySelector('#inputTempo');
    const inputTaxa = document.querySelector("#inputTaxa");
    const inputSelection = document.querySelector('.selectionTempo');

     
    //calls the calc function with the right paramaters
    const calcBtn = document.querySelector('.calcBtn');
    calcBtn.addEventListener('click', () => {
        console.log(inputValor.value);
        console.log(inputTime.value);
        console.log(inputTaxa.value);
        console.log(inputSelection.value);
    });
}

export default getEventListeners;