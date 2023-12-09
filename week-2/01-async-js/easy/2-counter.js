// jab tak timeout print kare tab tak while aage badh jata hai

const counter = (count = 1, timeInterval = 1000) => {
    setTimeout(() => {
        console.log(`Counter -> ${count++}`);
    }, timeInterval);
};

counter(1, 1000);