

const arr = [1, 2, 2, 3, 1];
const unique = { ...new Set(arr) }; // [1, 2, 3]

let uniquearr = []
arr.forEach(ele => {
    if (!uniquearr.includes(ele)){
        uniquearr.push(ele)
    }
})
console.log(uniquearr);  
