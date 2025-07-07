const firstNonRepeatingChar = (str) => {
    let strarr = str.split("")
    let result = []
    let rslt = strarr.reduce((acc, ele) => {
        acc[ele] = !acc[ele] ? 1 : acc[ele] + 1
        result.push(acc)
        return acc
    }, {})

    console.log(rslt)
}
firstNonRepeatingChar("aabbccddeef") // returns "f"
// firstNonRepeatingChar("aabb")        // returns null
// firstNonRepeatingChar("swiss")