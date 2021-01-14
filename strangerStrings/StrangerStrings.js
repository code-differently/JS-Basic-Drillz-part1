class StrangerStrings {
    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input) {
        //Goal: Get first 3 letters of the input word
        // 1. Get the 1st letter
        let firstLetter = input.charAt(0);
            // 2. Get the 2nd letter
        let secondLetter = input.charAt(1);
        // 3. Get the 3rd letter
        let thirdLetter = input.charAt(2);
        // 4. Reassemble
        let answer = firstLetter + secondLetter + thirdLetter;
        return answer;
        //return input.substring(0, 3);
    }

    getSuffix(input) {
        //Goal: Get last 3 letters of the input word
        // return input.substring(input.length-3, input.length);
        
        // 1. Get the last letter
        let firstLetter = input.charAt(input.length-1);
        // // 2. Get the 2nd to the last letter
        let secondLetter = input.charAt(input.length-2);
        // // 3. Get the 3rd to the last letter
        let thirdLetter = input.charAt(input.length-3);
        // // 4. Reassemble
        let answer = thirdLetter + secondLetter + firstLetter;
        return answer;
       // return thirdLetter + secondLetter + firstLetter;
        
    }

    getMiddleCharacter(inputValue) {
    let position;
        let length;
    //If the word has an even number of characters divide by 2
    //Otherwise if the word has an odd number of characters length -1 and divide by 2
    if (inputValue.length % 2 == 0) {
        position = inputValue.length / 2 - 1;
        length = 2;
    } else { 
        position = (inputValue.length - 1) / 2;
        length = 1;
    }
    return inputValue.substring(position, position + length);
    }

    getFirstWord(inputValue) {
        //return input.slice(input.length - 11,input.length - 5);
        // return inputValue.substr[(0, )];
        let firstWord = inputValue.split(' ');
        return firstWord[0];
    }
    
    getSecondWord(inputValue){
        let secondWord = inputValue.split(' ');
        return secondWord[1];
    }
    
    reverse(inputValue){
        return inputValue.split('').reverse('').join('');
    }
}

module.exports = StrangerStrings;