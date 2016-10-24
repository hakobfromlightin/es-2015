let timer = new Promise(function (resolve, reject) {
    console.log('Init Promise');

    setTimeout(function () {
        console.log('Timeout done');

        resolve();
    }, 2000);
});

timer.then(function () {
    console.log('Proceed now that timer has concluded.')
});
