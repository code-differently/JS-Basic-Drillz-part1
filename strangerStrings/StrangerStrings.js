<<<<<<< HEAD
class StrangerStrings {
    getHelloWorld(){
        return "Hello World" ;
    }
    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }
    getPrefix(input){
        return input.substring(0, 3);
    }
    getSuffix(input){
        //return input.substring(input.length-3, input.length);
        // Find the last leter of the word.
        let firstLetter= input.charAt(input.length-3);
        // find the 2nd to last letter;
        let secondLetter= input.charAt(input.length-2);
        // find the 3rd to last letter
        let thirdLetter= input.charAt(input.length-1);
        // combine letters
        let answer= firstLetter + secondLetter + thirdLetter;
        return answer;
    }
    getMiddleCharacter(inputValue){
        var position;
        var length;
        if(inputValue.length % 2 == 0) {
            position = inputValue.length / 2 - 1;
            length = 2;
        } else {
            position = (inputValue.length - 1)/ 2;
            length = 1;


        }
        return inputValue.substring(position, position + length)
    }
    getFirstWord(input){
        var firstWord = input.substr(0, input.indexOf(" "));
        return firstWord;
        
    }
    
   
    
    getSecondWord(input){
        var secondWord = input.split(" ");
            return secondWord[1];
            
}

    reverse(input){
            var newString = "";
            for (var i = input.length - 1; i >= 0; i--) { 
                newString += input[i];
            }
            return newString;
        }
    }

=======
class StrangerStrings {
    getHelloWorld(){
        return "Hello World" ;
    }
    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }
    getPrefix(input){
        return input.substring(0, 3);
    }
    getSuffix(input){
        //return input.substring(input.length-3, input.length);
        // Find the last leter of the word.
        let firstLetter= input.charAt(input.length-3);
        // find the 2nd to last letter;
        let secondLetter= input.charAt(input.length-2);
        // find the 3rd to last letter
        let thirdLetter= input.charAt(input.length-1);
        // combine letters
        let answer= firstLetter + secondLetter + thirdLetter;
        return answer;
    }
    getMiddleCharacter(inputValue){
        var position;
        var length;
        if(inputValue.length % 2 == 0) {
            position = inputValue.length / 2 - 1;
            length = 2;
        } else {
            position = (inputValue.length - 1)/ 2;
            length = 1;


        }
        return inputValue.substring(position, position + length)
    }
    getFirstWord(input){
        var firstWord = input.substr(0, input.indexOf(" "));
        return firstWord;
        
    }
    
   
    
    getSecondWord(input){
        var secondWord = input.split(" ");
            return secondWord[1];
            
}

    reverse(input){
            var newString = "";
            for (var i = input.length - 1; i >= 0; i--) { 
                newString += input[i];
            }
            return newString;
        }
    }

>>>>>>> debc9515f2904d56be8d08bfb0552178cc2ab434
module.exports = StrangerStrings;