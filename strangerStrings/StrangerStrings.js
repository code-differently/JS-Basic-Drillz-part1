class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment+secondSegment;
    }

    getPrefix(input){
        //let output = input[0] + input[1] + input[2]; //can also use charAt() or input.substring(0,3)
        return input.substring(0,3);
    }

    getSuffix(input){
        // const total = input.length;
        // let output = input[total-3] + input[total-2] + input[total-1];
        return input.substring(input.length-3, input.length);
    }

    getMiddleCharacter(input){
        const mid = Math.trunc(input.length / 2);
        return input[mid];
    }

    getFirstWord(input){
        let output = "";
        for (let i=0; i<input.length; i++) {
            if (input[i] === " ") {
                return output;
            }
            output += input[i];
        }
    }
    
    getSecondWord(spaceDelimnatedInput){
        return spaceDelimnatedInput.split(" ")[1];
    }
    
    reverse(input){
        let output = "";
        for (let i=input.length-1; i>=0; i--) {
            output+=input[i];
        }
        return output;
    }
}

module.exports = StrangerStrings;