let title = 'Red Rising';

if (title.startsWith('Red'/*, 5*/)) {
    console.log('This book starts with Red');
}
if (title.startsWith('ing')) {
    console.log('This book ends with ing');
}
if (title.includes('Red')) {
    console.log('This book includes Red');
}

console.log(title.repeat(5));