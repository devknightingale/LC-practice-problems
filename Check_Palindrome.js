function solution(inputString) {
    var splitString = inputString.split("") 
    var reverseString = [...splitString].reverse()
    if (splitString.toString() == reverseString.toString()) { 
        return true; 
    }
    else {
        return false;
    }
}
