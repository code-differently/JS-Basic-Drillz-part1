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
    getFirstWord(input){
        return input.slice(input.length - 11,input.length - 5);
    }
    
    getSecondWord(spaceDelimnatedInput){
        return spaceDelimnatedInput.substring(spaceDelimnatedInput.length - 4,spaceDelimnatedInput.length);
    }
    
    reverse(input){
        return input.split('').reverse().join('');
    }
    
}

module.exports = StrangerStrings;