function *numbers() {
    console.log('Begin');

    yield 1;
    yield 2;
    yield 3;
}

let numIterator = numbers();

console.log(numIterator.next()); // {vale: 1, done: false} {}
console.log(numIterator.next()); // {vale: 2, done: false}
console.log(numIterator.next()); // {vale: 3, done: true}


function *range(start, end) {
    while (start <= end) {
        yield start;

        start++;
    }
}

let iterator = range(1, 5);

console.log(iterator.next());
console.log(iterator.next());

for (let i of iterator){
    console.log(i);
}

console.log(
    [...range(1, 5)]
);