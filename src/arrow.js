class TaskCollection {
    constructor(tasks = []){
        this.tasks = tasks;
    }

    log(){
        // this.tasks.forEach(function (task) {
        //     console.log(task);
        // }); //old way

        //this inside arrow syntax is not changing,
        //but in old sway it may change
        this.tasks.forEach((task, index) => console.log(task, index));
    }
}

class Task {}

new TaskCollection([
    new Task, new Task, new Task
]).log();