const getCompoundInterest = (p, t, r, periodo) => {
    console.log('Período: ', p, ' Tempo: ', t, ' Taxa: ', r, ' Periodicidade: ', periodo);
    // compound int formula 
    const result = (p * (Math.pow((1 + r / 100), t))-p);
    const juros = result - p;
    console.log('Total: ', result, ' Juros: ', juros );    
    return result;
}

export default getCompoundInterest;