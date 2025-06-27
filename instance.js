function Show(fname1, fname2) {
    this.fname1 = fname1;
    this.fname2 = fname2;
}
let obj = new Show("ram", "sham"); //Show { fname1: 'ram', fname2: 'sham' }
let obj2 = Show("the", "rock") //undefined

console.log(obj);
console.log(obj2)

console.log([] == "");   //true when compare two different type [] converted tp empty string
console.log([] == [])  //false when compare two array, it refer to different references



var foo = "lion";
function show() {
    foo = "panda";
    return;
    function foo() { }
}
// console.log(show());
show()
console.log(foo);

//in js function or var with same name override each other

let str = "code js and code only do code in js"
let strarray= str.split("")
let result =strarray.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc

}, {})
console.log("result",result);




