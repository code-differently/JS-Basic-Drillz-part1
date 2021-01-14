class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        return input.substring(input.length - 6,input.length - 3);
    }

    getSuffix(input){
        return input.substring(input.length - 3,input.length);
    }
 
    getMiddleCharacter(input){
        let middleOfTheStringPosition
         = Math.floor(input.length / 2);
      
        return input.substring(middleOfTheStringPosition,middleOfTheStringPosition+1);
    }
    getFirstWord(inputValue){
        var firstWord = inputValue.split(" ");
        return firstWord[0];
       // return input.slice(input.length - 11,input.length - 5);
    }
    
    getSecondWord(inputValue){
        var secondWord = inputValue.split(" ");
        return secondWord[1];
        //return spaceDelimnatedInput.substring(spaceDelimnatedInput.length - 4,spaceDelimnatedInput.length);
    }
    
    reverse(input){
        return input.split('').reverse().join('');
    }
    
}

module.exports = StrangerStrings;