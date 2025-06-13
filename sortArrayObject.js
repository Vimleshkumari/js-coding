console.log("sort array of Object with age and name");
const peopleArray = [
    { name: "Bob", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 28 },
    { name: "Frank", age: 27 },
    { name: "Eva", age: 35 },
    { name: "Grace", age: 24 },
    { name: "Helen", age: 29 },
    { name: "Jane", age: 31 },
    { name: "Ian", age: 26 }
];

function sortNameAgeArray(arr, isName) {
    let sortedAge = []
    sortedAge = arr.sort((a, b) => b.age - a.age)
    // let sortedArray = isName ? sortedAge.sort((a, b) => a.name < b.name ? -1 : 1) : sortedAge

    // or
    let sortedArray = isName ? sortedAge.sort((a, b) => a.name.localeCompare(b.name)) : sortedAge
    return sortedArray

}
console.log("Resultant array after sorting", sortNameAgeArray(peopleArray))
console.log("Resultant array after sorting", sortNameAgeArray(peopleArray, true))

