function fire(bool) {
    if (bool) {
        // var foo = 'bar';
        let foo = 'bar';

        console.log(foo);
    } else {
        /*
        * Will print undefined instead of uncaught ref., if we
        * are using var. But if we are using let it will print
        * uncaught ref. Using let is more logical.
        */
        console.log(foo);
    }
}

fire(true);

const names = ['Hakob', 'Levon'];

/*
 * Will lead to error, const is immutable
 * to reassignment.
 * But we can do anything els with "names".
 */
// names = ['Rafo'];

names.push('Arpine');

//Default to using "const".
//If later need to reassign the value use "let".
//For global stuff us var