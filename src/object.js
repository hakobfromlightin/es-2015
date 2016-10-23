function getPerson() {
    let name = 'Hakob';
    let age = 23;

    //es5
    // return {
    //     name: name,
    //     age: age,
    //     greet: function () {
    //         return 'Hello, ' + this.name;
    //     }
    // };

    //es6
    return {
        name,
        age,
        greet() {
            return `Hello, ${this.name}`;
        }
    }
}
/*----------------------------------------------*/

let person = {
    name: 'Hakob',
    age: 32
};

let {name, age} = person;

console.log(age); //32
console.log(name); //Hakob

/*-----------------------------------------------*/

//es5
// function getData(data) {
//     var results = data.results;
//     var count = data.count;
//     var status = data.status;
//
//     console.log(results, count, status); //['foo', 'bar'], 30, 200
// }


//es6
function getData({results, count, status}) {
    console.log(results, count, status); //['foo', 'bar'], 30, 200
}

getData({
    status: 200,
    results: ['foo', 'bar'],
    count: 30
});