// jab tak timeout print kare tab tak while aage badh jata hai

const counter = (count = 1, timeInterval = 1000) => {
    let flag = false;
    while (flag === false) {
        flag = true;
        setTimeout(() => {
            console.log(`Counter -> ${count++}`);
            flag = false;
        }, timeInterval);
    }
};

counter(1, 1000);