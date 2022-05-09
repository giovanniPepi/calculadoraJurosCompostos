import getCalcContainer from "./getCalcContainer";
import getEventListeners from "./getEventListeners";
import getResultContainer from "./getResultContainer";

const domLoader = (() => {
  getCalcContainer();
  getResultContainer();
  getEventListeners();
})();

export default domLoader; 