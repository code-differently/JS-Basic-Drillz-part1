class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){

    // Goal: Get first three letters of input word
    // Get first letter
    //let firstLetter = input.charAt(0);
    //get second letter
    //let secondLetter = input.charAt(1);
    //get thirdletter
    //let thirdLetter = input.charAt(2);
    //combine all three letters
    //let answer = fistLetter + secondLetter + thirdLetter
    return input.substring(0, 3);
    }
    
    getSuffix(input){
    // get the last letter
    //let lastLetter = input.charAt(5);
    // get the 2nd to last letter
    //let secondLastLetter = input.charAt(4);
    // get the 3rd to last letter
    //let thirdLastLetter = input.charAt(3);
    //combine all three letters
    //let answer = thirdLastLetter + secondLastLetter + lastLetter;
    //Return answer
    return input.substring(input.length - 3,input.length);

    }

    getMiddleCharacter(input){
        //let middle
        //= Math.floor(input.length / 2);
        //return input.substring(middle,middle+1);
    //}
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
        return input.substring(0,6);
    }

    getSecondWord(spaceDelimnatedInput){
        return spaceDelimnatedInput.substring(7,11);
    }
    
    reverse(input){
            var newString = "";
            for (var i = input.length - 1; i >= 0; i--) { 
                newString += input[i];
            }
            return newString;
        }
    }

       // return input.split("").reverse().join("");
    
        module.exports = StrangerStrings;
