//es5
// function User(username, email) {
//     this.username = username;
//     this.email = email;
// }
//
// User.prototype.changeEmail = function (nemEmail) {
//     this.email = nemEmail;
// };

//es6
class User {
    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    //example
    static register(...args) {//rest
        return new User(...args);//spread
    }

    //getters
    get foo() {
        return 'foo';
    }

    changeEmail(newEmail){
        this.email = newEmail;
    }
}

let user = User.register('HakobBaghdasaryan', 'hakob93baghdasaryan@gmail.com');

user.changeEmail('blackL1st@inbox.ru');

/*-----------------------------------*/

function log(strategy) {
    strategy.handle();
}

class ConsoleLogger {
    handle() {
        console.log('Using the console strategy to log.')
    }
}

log(new ConsoleLogger);