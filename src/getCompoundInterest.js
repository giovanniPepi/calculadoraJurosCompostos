const getCompoundInterest = (p, t, r, taxaPeriodo, periodicidade) => {
    console.log('Período: ', p, ' Tempo: ', t, ' Taxa: ', r, ' Taxa em: ', taxaPeriodo, ' periodicidade: ', periodicidade);

    const convertToMonthlyTaxa = (r) => {
        let monthlyTaxa = ((Math.pow(((r/100) + 1), (1/12)))- 1) * 100;
        return r =  monthlyTaxa;
    };

    const convertToYearly = (t) => t = t * 12;

    // compound int formula - default is on monthly interest and monthly periods

        //adjust taxa to monthly if needed 
        if (taxaPeriodo !== 'mensal') r = convertToMonthlyTaxa(r);
        //adjust taxa and n to months if needed
        console.log(periodicidade, t);
        if (periodicidade === 'anos') t = convertToYearly(t);  
        console.log(r, 'is the taxa', t, ' is the n ');
        const result = (p * (Math.pow((1 + r / 100), t)));
        const juros = result - p;
        console.log('Total: ', result, ' Juros: ', juros );    


}

export default getCompoundInterest;