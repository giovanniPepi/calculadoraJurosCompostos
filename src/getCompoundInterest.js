import getResultTable from "./getResultTable";

const getCompoundInterest = (p, t, r, periodicidade, taxaPeriodo) => {
    console.log('Período: ', p, ' Tempo: ', t, ' Taxa: ', r, ' periodicidade: ', periodicidade, ' Taxa em: ', taxaPeriodo, );

    //conversion formulas
    const convertToMonthlyTaxa = (r) => {
        let monthlyTaxa = ((Math.pow(((r/100) + 1), (1/12)))- 1) * 100;
        return r =  monthlyTaxa;
    };
    const convertToMonths = (t) => t = t*12;

    //checklist to convert
    taxaPeriodo === 'mensal'? console.log(null):r = convertToMonthlyTaxa(r);
    periodicidade === 'meses'? console.log(null) : t = convertToMonths(t);
 
    console.log(r, 'is the taxa', t, ' is the n ');
    
    //main calc
    //array to store results
    let result1 = [];

    for (let i = 0; i <= t; i++) {
      //Obj to store each individual result
      let resultObj = {};
      let result = Math.round((p * (Math.pow((1 + r / 100), i)))*100)/100;
      let juros = Math.round((result - p)*100)/100;
      resultObj['ano'] = i;
      resultObj['valor'] = result;
      resultObj['juros'] = juros;
      result1.push(resultObj);
    }
    console.log(result1);   
    return result1;
}

export default getCompoundInterest;