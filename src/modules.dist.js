 class TaskCollection {
    constructor(tasks = []){
        this.tasks = tasks;
    }

    log(){
        // this.tasks.forEach(function (task) {
        //     console.log(task);
        // }); //es5

        //"this" inside arrow syntax is not changing,
        //but in old sway it may change
        this.tasks.forEach((task, index) => console.log(task, index));
    }

    dump() {
        console.log(this.tasks );
    }
}

//es5
// var TaskCollection = require('./TaskCollection');

//es6
class Task {}

new TaskCollection([
    new Task, new Task, new Task
]).log();
