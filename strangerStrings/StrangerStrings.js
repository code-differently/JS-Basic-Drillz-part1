class StrangerStrings {

    getHelloWorld(){
        return 'Hello world';
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment.concat(secondSegment);
    }

    getPrefix(input) {
        return input[0] + input[1] + input[2];
    }

    getSuffix(input){
        return input[3] + input[4] + input[5];
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
        
        var firstWord = input.substr(0, input.indexOf(" "));

        return firstWord;
    }
    
    getSecondWord(input){
        var secondWord = input.split(" ");
        return secondWord;
    }
    
    reverse(input){
        let splitString = input.split("");
        let = splitString.reverse();
        return s.split("").reverse().join("");
        
    }
}

module.exports = StrangerStrings;