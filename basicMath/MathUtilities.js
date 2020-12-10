class MathUtilities {


    add(baseValue, valueToAdd){
       let sum = (baseValue + valueToAdd)
        return sum;
    }

    subtract(baseValue, valueToAdd){
        let diff = (baseValue - valueToAdd)
        return diff;
    }

    divide(baseValue, valueToAdd){
        let quotient = (baseValue/valueToAdd)
        return quotient;
    }

    multiply(baseValue, valueToAdd){
        let product = (baseValue*valueToAdd)
        return product;
    }
}

module.exports = MathUtilities;