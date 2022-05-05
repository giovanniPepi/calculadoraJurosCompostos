import getCalcContainer from "./getCalcContainer";
import getContainer from "./getContainer";
import getResultContainer from "./getResultContainer";

const domLoader = (() => {
  getContainer();
  getCalcContainer();
  getResultContainer();
})();

export default domLoader;