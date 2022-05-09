import body from "./getBody";
import getResultContainer from "./getResultContainer";

const cleanResultTable = () => {
  //nuke resultContainer and reconstruct it
  const resultContainer  = document.querySelector('.resultContainer');
  body.removeChild(resultContainer);
  getResultContainer();


  
  
}
export default cleanResultTable;
