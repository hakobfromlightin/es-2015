function sum(...numbers) {//rest
    return numbers.reduce(
        (prev, current) => prev + current
    );
}

alert(sum(1, 2, 3));


let nums = [1, 2];

function multiply(x, y) {
    return x * y;
}

alert(multiply(...nums));//spread