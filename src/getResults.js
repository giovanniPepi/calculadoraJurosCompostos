import getCompoundInterest from "./getCompoundInterest";
import getResultTable from "./getResultTable";
import getResultChart from "./getResultChart";

const getResults = (p, t, r, periodicidade, taxaPeriodo, aporte) => {
  const result1 = getCompoundInterest(p, t, r, periodicidade, taxaPeriodo, aporte);
  getResultTable(result1);
  getResultChart(result1);
}

export default getResults;