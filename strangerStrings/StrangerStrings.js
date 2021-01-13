class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        let string = "";
        string += input[0];
        string += input[1];
        string += input[2];
        return string;

    }

    getSuffix(input){
        let string = "";
        string += input[input.length - 3];
        string += input[input.length - 2];
        string += input[input.length - 1];
        return string;
    }

    getMiddleCharacter(input){
        let middle = Math.floor(input.length/2);
        if (input.length % 2 === 0) {
            return input[middle-1] + input[middle];
            }else {
            return input[middle];
        }
    }

    getFirstWord(input){
        return input.split(" ")[0];
    }
    
    getSecondWord(spaceDelimnatedInput){
        return spaceDelimnatedInput.split(" ")[1];
    }
    
    reverse(input){
        let splitString = input.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        return joinArray;
    }
}

module.exports = StrangerStrings;

