class StrangerStrings {

    getHelloWorld(){
        return 'Hello World';
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment.concat(secondSegment);
    }

    getPrefix(input){
        // let firstLetter = input.charAt(0);
        // let secondLetter = input.charAt(1);
        // let thirdLetter = input.charAt(2);
        // let answer = firstLetter + secondLetter + thirdLetter;
        // return answer;
        return input.substring(0,3);
    }

    getSuffix(input){
        // let lastLetter = input.charAt(input.length-1);
        // let secondfromLetter = input.charAt(input.length-2);
        // let thirdfromLetter = input.charAt(input.length-3);
        // return thirdfromLetter + secondfromLetter + lastLetter ;
        
        return input.substring(input.length-3,input.length);
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
        return input.substring(0,6);
    }
    
    getSecondWord(input){
        return input.substring(7,11);
    }
    
    reverse(input){
    //    var newString = "";
    //     for (var i = input.length - 1; i >= 0; i--) { 
    //         newString += newString + input[i]
    //     return newString;}

       return input.split("").reverse().join("");
    }
}

module.exports = StrangerStrings;