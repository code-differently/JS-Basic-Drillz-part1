class StrangerStrings {

    getHelloWorld(){
        let helloWorld = "Hello World"
        return helloWorld;
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){

       /* let FirstLetter = input[0]
        let SecondLetter = input [1]
        let ThirdLetter = input [2]
        return FirstLetter + SecondLetter + ThirdLetter; */
        return input.substr(0,3);
    }

    getSuffix(input){

        let FourthLetter = input[input.length - 3];
        let FifthLetter = input[input.length - 2];
        let lastLetter = input[input.length - 1];
        return FourthLetter + FifthLetter + lastLetter;
        
    }

    getMiddleCharacter(input){
        let inputLength = input.length;
        let middle = Math.floor(inputLength/2);
        if (inputLength % 2 == 0){ 
            // if even
            return input[middle - 1] + input[middle];
        } else {
            //if odd
         return input[middle];
        }
    }

    getFirstWord(inputValue){
        let x = inputValue.split(" ");
        let firstWord = x[0];
        return firstWord;
    }
    
    getSecondWord(inputValue){
        let x = inputValue.split(" ");
        let secondWord = x[1];
        return secondWord;
    }
    
    reverse(inputValue){
        let x = inputValue.split(""); 
        // x = [w,u,t,a,n,g,c,l,a,n]
        let rev = x.reverse();
        // rev= n,a,l,c,g,n,a,t,u,w
        let together = rev.join("");
        // join = nalcgnatuw
        return together;
    }
}

module.exports = StrangerStrings;