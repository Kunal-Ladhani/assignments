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

// expensiveOp(100000000, 1000);