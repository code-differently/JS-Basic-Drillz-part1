class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment.concat(secondSegment);
    }

    getPrefix(input){
        return input.substring(0, 3);
    }

    getSuffix(input){
        return input.slice(input.length - 3);
    }

    getMiddleCharacter(input){
        var position;
        var length;

        if(input.length % 2 == 1) {
            position = input.length / 2;
            length = 1;
        } else {
            position = input.length / 2 - 1;
            length = 2;
        }
        return input.substring(position, position + length);
    }

    getFirstWord(input){
        var firstWord = input.split(" ");
        return firstWord[0];
    }
    
    getSecondWord(input){
        var secondWord = input.split(" ");
        return secondWord[1];
    }
    
    reverse(input){
        let splitString = input.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        return joinArray;
    }
}

module.exports = StrangerStrings;