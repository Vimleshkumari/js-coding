const firstNonRepeatingChar = (str) => {
    let strarr = str.split("")
    let result = {}
    // let rslt = strarr.reduce((acc, ele) => {
    //     acc[ele] = !acc[ele] ? 1 : acc[ele] + 1
    //     result.push(acc)
    //     return acc
    // }, {})

    for (let ele of str) {
        result[ele] = (result[ele] || 0) + 1
    }
    for (let item of str) {
        if (result[item] === 1) {
            return item
        }
    }
    return null
    //{ a: 2, b: 2, c: 2, d: 2, e: 2, f: 1 }
}
console.log(firstNonRepeatingChar("aabbccddeefaaag"))// returns "f"
console.log(firstNonRepeatingChar("aabb"));  // returns null
console.log(firstNonRepeatingChar("swiss"));