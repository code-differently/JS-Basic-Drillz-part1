class StrangerStrings {

    getHelloWorld(){
        return null;
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        let firstLetter = input[0]
        let secondLetter = input[1]
        let thirdLetter = input[2]
        return firstLetter + secondLetter + thirdLetter;
    }

    getSuffix(input){

        // get the 3rd to last letter.
        let thirdToLastLetter = input[input.length - 3];
        // get the 2nd letter.
        let secondToLastLetter = input[input.length - 2];
        // get the last letter.
        let lastLetter = input[input.length - 1];
        return thirdToLastLetter + secondToLastLetter + lastLetter;
        
    }

    getMiddleCharacter(input){
        return null;
    }

    getFirstWord(input){
        return null;
    }
    
    getSecondWord(spaceDelimnatedInput){
        return null;
    }
    
    reverse(input){
        return null;
    }
}

module.exports = StrangerStrings;