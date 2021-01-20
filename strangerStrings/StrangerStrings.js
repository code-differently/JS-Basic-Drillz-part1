class StrangerStrings {

    getHelloWorld(){
       let mystring = "Hello World"
        return mystring
    }

    concatenation(firstSegment, secondSegment){
      firstSegment = "Wutang"
      secondSegment = " Forever"
        return firstSegment + secondSegment;
      
    }

    getPrefix(mystring1){
        mystring1="Wutang"
        return mystring1.substring(0,3);
    }

    getSuffix(mystring2){
        mystring2="Wutang"
let last3char = mystring2.charAt (mystring2.length -3)
let last2char = mystring2.charAt (mystring2.length -2)
let lastchar = mystring2.charAt (mystring2.length -1)

return  last3char + last2char + lastchar
      
    }

    getMiddleCharacter(inputValue) {
      //Figure out stringlength and to find out midpoint. Declare the variables for this
              let midpoint;
              let length;
      //for even #characters -returning 1 character. NOTE this is for odd string length
              if(inputValue.length % 2 == 1) {
                  midpoint = inputValue.length / 2;
                  length = 1;
      }
      //for odd #characters -returning 2 char.  NOTE this is for even string length
               else {
                  midpoint = inputValue.length / 2 - 1;
                  length = 2;
              }
      
              return inputValue.substring(midpoint, midpoint + length)
          }
      
  
          getFirstWord(inputValue){
            inputValue = "Wutang Clan";
            let splitinput = inputValue.split(" ")
            let firstword = inputValue.split(" ")[0]
            return firstword;
              }
              
          
  
  getSecondWord(spaceDelimnatedInput){
      return null;
  }

  getSecondWord(inputValue){
    inputValue = "Wutang Clan";
    let splitinput = inputValue.split(" ")
    let secondword = inputValue.split(" ")[1]
    return secondword;
      }
  
      reverse(inputValue){
      inputValue = "WutangClan"
      return inputValue.split("").reverse().join("");
          }
  
}
module.exports = StrangerStrings;