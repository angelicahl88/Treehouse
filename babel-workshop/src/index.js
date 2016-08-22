require('babel-polyfill');

function doubleAsync(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value * 2), 3000)
    });
}

async function myAsyncFunction() {
    var answer = await doubleAsync(3);
    console.log(answer);
}

myAsyncFunction();