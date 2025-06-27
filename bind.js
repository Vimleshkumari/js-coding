let a = {};
let b = { key: "b" };
let c = { key: "c" };
 
a[b] = 123;
a[c] = 456;
 
console.log(a[b]);

const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};
 
const cc = obj.b.bind(obj);
 
obj.b();
cc();
 
