const test = {
    prop: 42,
    func: function () {
        console.log(this);
        let a = () => {
            console.log(this)
        }
        a()

        return this.prop;
    },
};

console.log(test.func());



