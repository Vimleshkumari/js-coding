const isAnagram = (str1, str2) => {
    console.log(str1.split("").sort());
    
    return str1.split("").sort().join("") === str2.split("").sort().join("")
}

console.log("Is Anagram", isAnagram("triabjkmn", "itrm"));
