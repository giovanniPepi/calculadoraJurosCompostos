import getCalcContainer from "./getCalcContainer";
import getResultContainer from "./getResultContainer";

const domLoader = (() => {
  getCalcContainer();
  getResultContainer();
})();

export default domLoader; 