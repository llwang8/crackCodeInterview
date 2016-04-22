//Cracking Coding Interview

/*
_________________________________________________________________
1.1 Implement an algorithm to determine if a string has all unique characters
What if you can not use additional data structures?
_________________________________________________________________
*/
function isUniqueChar(str){
  var i, char;
  for (i=0; i<str.length; i++){
    char = str.charAt(i);
    if ( i != str.lastIndexOf(char)){
      return false;
    }
  }
  return true;
}
console.log(isUniqueChar("abc 12de fg"));


function isUniqueString(string) {
  //match any single character in the range of a-z. i is case insensitive.
  var result = !(/([a-z])\1/i).test(string);
  console.log("Is " + string + " unique? " + result);
  return result;
}

var greeting1 = "Hello";
var greeting2 = "Helo";

isUniqueString(greeting1);
isUniqueString(greeting2);


/*
_________________________________________________________________
1.2 Write code to reverse a C-Style String (C-String means that “abcd” is represented
as  five characters, including the null character )
_________________________________________________________________
*/
//in-place
function reverseCstyleString(str){
    var i, j;

    if (str[str.length-1] == " "){
        newStr = str.slice(0, str.length-1);
    }

    for (i=0, j=str.length-2; i<j; i++, j--){
        lastCharToSwap = newStr[j];
        middle = newStr.slice(i+1, j);
        firstCharToSwap = newStr[i];
        if (i !== 0){
            frontHalf = newStr.slice(0, i);
            backHalf = newStr.slice(j+1);
            newStr = frontHalf + lastCharToSwap + middle + firstCharToSwap + backHalf;
            //console.log("i: " + i + " " + newStr);
        }else {
            newStr = lastCharToSwap + middle + firstCharToSwap;
            //console.log("i: " + i + " " + newStr);
        }

        console.log(newStr);
    }
}
reverseCstyleString("abcdef ");

function reverseCstyleString2(str){
    //if (Object.prototype.toString.call(str) !== "object String"){
    //    return "invalid input";
    //}
    var newStr = "";
    for (var i=str.length-1; i>=0; i--){
        newStr += str.charAt(i);
    }
    if (newStr[0] == " "){
        return newStr.substr(1);
    }
}
reverseCstyleString2("abcdef ");

/*
_________________________________________________________________
1.3 Design an algorithm and write code to remove the duplicate characters in a string
without using any additional buffer NOTE: One or two additional variables are fine. An
extra copy of the array is not
FOLLOW UP
Write the test cases for this method
_________________________________________________________________
*/

function removeDuplicateChar(str){
    var i, char, charHash = {};
    for (i=0; i<str.length; i++){
        char = str.charAt(i);
        if (!charHash[char]){
            charHash[char] = 1;
        }else {
            charHash[char] ++;
        }
    }
    return Object.keys(charHash).join('');
}

removeDuplicateChar("abddceeef");

/*
_________________________________________________________________
1.4 Write a method to decide if two strings are anagrams or not
_________________________________________________________________
*/
function isAnagrams(str1, str2){
    var i, char, result = 0, str2Arr = str2.split('');
    if (str1.length != str2.length){
        return false;
    }
    for (i=0; i<str1.length; i++){
        result ^= str1.charCodeAt(i);
    }
    for (i=0; i<str2.length; i++){
        result ^= str2.charCodeAt(i);
    }
    if (result === 0){
        return true;
    }else {
        return false;
    }
}

function isAnagrams("abbcdd", "bbddac");
function isAnagrams("dashy", "sashy");

/*
_________________________________________________________________
1.5 Write a method to replace all spaces in a string with ‘%20’
________________________________________________________________
*/
function replaceAllSpaces(str){
    var regx = /[\t\r\n]+/g;
    return str.replace(regx, '%20');
}

replaceAllSpaces("adv\tadfs\r\r\nfasdf");

/*
_________________________________________________________________
1.6 Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
write a method to rotate the image by 90 degrees Can you do this in place?
________________________________________________________________
*/
function rotate90degree(array){
    var i, j, N = array.length, temp;

    for (i=0; i<N; i++){
        for (j=0; j<N; j++){
            temp = array[i][j];
            array[i][j] = array[N-j][i];
        }
    }
    return array;
}



/*
_________________________________________________________________
1.7 Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column is set to 0
________________________________________________________________
*/
function setRowColumnZero(array){
    var i, j, M = array.length, N = array[0].length;
    for (i=0; i<M; i++){
        for (j=0; j<N; j++){
            if (array[i][j] === 0){
                setZero(i, j);
            }
        }
    }
    return array;

    function setZero(x, y){
        var a;
        for (a=0; a<M; a++){
            array[a, y] = 0;
        }
        for (a=0; a<N; a++){
            array[x, a] = 0;
        }
    }
}



/*
_________________________________________________________________
1.8 Assume you have a method isSubstring which checks if one word is a substring of
another Given two strings, s1 and s2, write code to check if s2 is a rotation of s1
using only one call to isSubstring (i e , “waterbottle” is a rotation of “erbottlewat”)
________________________________________________________________
*/
function isRotation(s1, s2){

}
function isSubstring(str1, str2){

}



