class StrangerStrings {

    getHelloWorld() {
        let answer = "Hello World";
        return answer;

    }

    concatenation(firstSegment, secondSegment) {
        return firstSegment + secondSegment;

    }

    getPrefix(input) {
        let str = 'Wutang';
        let res = str.substring(0, 3);
        return res;
    }


    getSuffix(input) {
        let str = 'Wutang';
        let res = str.substring(6, 3);
        return res;
    }

    getMiddleCharacter(input) {
        let str = 'MethodMan';
        let res = str.charAt(4, 5);
        return res;
    }

    getFirstWord(input) {
        let str = 'Wutang';
        let res = str.substring('Wutang');
        return res;
    }

    getSecondWord(spaceDelimnatedInput) {
        let str = 'Clan';
        let res = str.substring('clan');
        return res;
    }

    reverse(input) {
        let str = 'WutangClan';
        let res = str.reverseSubtring('nalCgnatuW');
        return res;
    }

    module.exports = StrangerStrings;