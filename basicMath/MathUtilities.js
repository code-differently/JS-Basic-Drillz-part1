class MathUtilities {


    add(baseValue, valueToAdd){
        let answer = baseValue + valueToAdd;
        return answer;
    }

    subtract(baseValue, valueToAdd){
        return baseValue - valueToAdd;
    }

    divide(baseValue, valueToAdd){
        return baseValue / valueToAdd;
    }

    multiply(baseValue, valueToAdd){
        return baseValue * valueToAdd;
    }
}

module.exports = MathUtilities;