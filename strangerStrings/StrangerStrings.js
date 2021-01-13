class StrangerStrings {

    getHelloWorld(){
        return 'Hello World';
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

        return input.substring(position, position + length)
    }
    

    getFirstWord(input){
        return input.substr(0, input.indexOf(" "));
           
    }

    getSecondWord(spaceDelimnatedInput){
        var split = spaceDelimnatedInput.split(' ');
        return split[1];
    }
    
    reverse(inputValue){
        const splitString = inputValue.split('');
        const reversedString = splitString.reverse();
        const joinArray = reversedString.join('');
        return joinArray;
    }
}

module.exports = StrangerStrings;