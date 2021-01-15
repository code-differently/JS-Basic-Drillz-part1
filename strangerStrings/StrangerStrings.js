class StrangerStrings {

    getHelloWorld(){
        let helloWorld = "Hello World";
        return helloWorld
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
        //get input length
        let inputLength = input.length;
        //divide length by two to cut in half. Math.floor to round down since string is an odd number.
        let middle = Math.floor(inputLength / 2);
        //return middle of input value.
        if (inputLength % 2 == 0){
            // if even 
            return input[middle -1] + input[middle];
        } else {
            return input[middle];
        }

    }

    getFirstWord(inputValue){
        // split up the string using .split(). Turns a string into an array.
        let x = inputValue.split(" ");
        // get the first index of the array.
        let firstWord = x[0];
        // return the first word.
        return firstWord;
    }
    
    getSecondWord(inputValue){
        // turn input value into a string using .split()
        let x = inputValue.split(" ");
        // get the second index of the array.
        let secondWord = x[1];
        // return the second word.
        return secondWord;
    }
    
    reverse(inputValue){
        // turn input value into a string using .split()
        let x = inputValue.split("");
        // reverse the array using .reverse()
        let strToArray = x.reverse();
        // turn the array back to a string with .join()
        let backwardArray = strToArray.join(""); 
        // return joined reversed string.
        return backwardArray;
    }
}

module.exports = StrangerStrings;