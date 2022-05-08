const getCompoundInterest = (p, t, r, periodo) => {

    // compound int formula 
    const result = p * (Math.pow((1 + r / 100), t));
    console.log(result);    
    return result;
}

export default getCompoundInterest;