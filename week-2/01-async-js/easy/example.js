const expensiveOp = (N, t) => {
    for (let i = 1; i <= N; i++) {
        setTimeout(() => {
            console.log(i);
        }, t);
    }
}

for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 10000);
}

expensiveOp(100000000, 1000);


function myReadFile() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Hi, promise got resolved');
        }, 3000);
    });
    return p;
}

function myLogger(data) {
    console.log(data);
}

const myPromise = myReadFile();
myPromise.then(myLogger);