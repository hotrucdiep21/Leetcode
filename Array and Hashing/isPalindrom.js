
function isPalindrom (str) {
    let newStr = str.replace(/[^A-Z0-9a-z]/g, "");
    let reverseStr = newStr.split("").reverse().join("");
    console.log(newStr)
    console.log(reverseStr)
    return newStr === reverseStr;
}


console.log(isPalindrom('madam'))