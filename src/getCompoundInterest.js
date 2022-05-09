import getResultTable from "./getResultTable";

const getCompoundInterest = (p, t, r, periodicidade, taxaPeriodo) => {
    console.log('Período: ', p, ' Tempo: ', t, ' Taxa: ', r, ' periodicidade: ', periodicidade, ' Taxa em: ', taxaPeriodo, );

    //conversion formulas
    const convertToYearlyTaxa = (r) => {
        console.log('fucking r is ', r)
        let yearlyTaxa = (Math.pow((1 + r/100), 12) - 1)*100;
        return r =  yearlyTaxa;
    };

    //checklist to convert
    /* taxaPeriodo === 'mensal'? console.log(null):r = convertToMonthlyTaxa(r); */
    if (taxaPeriodo === 'mensal') r = convertToYearlyTaxa(r); 

    console.log(r, 'is the taxa', t, ' is the n ');
    
    //main calc
    //array to store results
    let result1 = [];

    for (let i = 0; i <= t; i++) {

      //Obj to store each individual result
      let resultObj = {};
      // rounds to 2 decimals using 100
      let result = Math.round((p * (Math.pow((1 + r / 100), i)))*100)/100;
      let juros = Math.round((result - p)*100)/100;
      resultObj[`${periodicidade}`] = i;
      resultObj['Total'] = result;
      resultObj['Juros'] = juros;
      result1.push(resultObj);
    }

    return result1;
}

export default getCompoundInterest;