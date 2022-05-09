const getCompoundInterest = (p, t, r, periodicidade, taxaPeriodo, aporte) => {
    console.log('Inicial: ', p, ' Tempo: ', t, ' Taxa: ', r, ' periodicidade: ', periodicidade, ' Taxa em: ', taxaPeriodo, ' aporte: ', aporte);

    //conversion formulas
    const convertToYearlyTaxa = (r) => {
        let yearlyTaxa = (Math.pow((1 + r/100), 12) - 1)*100;
        return r =  yearlyTaxa;
    };

    const convertToMonthlyTaxa = (r) => {
      let monthlyTaxa = (Math.pow((1+r/100), 1/12)-1)*100;
      return r = monthlyTaxa;
    }

    //checklist to convert
    if (taxaPeriodo === 'mensal') r = convertToYearlyTaxa(r); 
    if (periodicidade === 'Mes' && taxaPeriodo === 'anual') {
      r = convertToMonthlyTaxa(r);
      console.log(t, ' ', r);
    } 

    console.log(r, 'is the taxa', t, ' is the n ');
    
    //main calc
    //array to store results
    let result1 = [];

    for (let i = 0; i <= t; i++) {

      //Obj to store each individual result
      let resultObj = {};
      // rounds to 2 decimals using 100
      let result = Math.round(((p + aporte) * (Math.pow((1 + r / 100), i)))*100)/100;
      let juros = Math.round((result - p)*100)/100;
      resultObj[`${periodicidade}`] = i;
      resultObj['Total R$'] = result;
      resultObj['Juros R$'] = juros;
      result1.push(resultObj);
    }
    return result1;
}

export default getCompoundInterest;