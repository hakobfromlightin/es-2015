//es5
// var TaskCollection = require('./TaskCollection');

//es6
import TaskCollection, { foo } from './TaskCollection.js';

class Task {}

new TaskCollection([
    new Task, new Task, new Task
]).log();