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
/*     const result = (p * (Math.pow((1 + r / 100), t)));
    const juros = result - p;
    console.log('Total: ', result, ' Juros: ', juros);    
 */
    //looping through each period
    for (let i = 0; i <= t; i++) {
      let result = (p * (Math.pow((1 + r / 100), i)));
      let juros = result - p;
      console.log(i, 'periodo ', 'Total: ', result, ' Juros: ', juros);    

    }
    

}

export default getCompoundInterest;