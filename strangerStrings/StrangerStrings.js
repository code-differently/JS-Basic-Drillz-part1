class StrangerStrings {
  getHelloWorld() {
    return "Hello World";
  }

  concatenation(firstSegment, secondSegment) {
    return firstSegment + secondSegment;
  }

  getPrefix(input) {
    return input.substr(0, 3);
  }

  getSuffix(input) {
    return input.substr(input.length - 3, input.length);
  }

  getMiddleCharacter(inputValue) {
    let position;
    let length;
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
    let getFirst = inputValue.split(" ");
    return getFirst[0];
  }

  getSecondWord(inputValue) {
    let getSecond = inputValue.split(" ");
    return getSecond[1];
  }

  reverse(inputValue) {
    return inputValue.split("").reverse().join("");
  }
}

module.exports = StrangerStrings;
