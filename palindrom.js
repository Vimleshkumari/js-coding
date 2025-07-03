const isPalindrom = (ele) => {
    const result = ele.split("").reverse().join("")
    if (ele === result) return "yes"
    return "No"

}

console.log("is Palindrom", isPalindrom("122"));
