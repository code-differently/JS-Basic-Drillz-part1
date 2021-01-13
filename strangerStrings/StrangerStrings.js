class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        return input.substring(0,3);
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
        return input.slice(0,6);
    }
    
    getSecondWord(spaceDelimnatedInput){
        return spaceDelimnatedInput.slice(7,11);
    }
    
    reverse(input){
        return input.split('').reverse().join('');
    }
    
}

module.exports = StrangerStrings;