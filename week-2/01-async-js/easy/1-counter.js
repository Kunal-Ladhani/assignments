
/**
 * counter that by default counts + 1 after each second.
 * @param { Number } count the initial value of count
 * @param { Number } timeInterval time interval elapsed between each count
 */
const counter = (count = 1, timeInterval = 1000) => {
    setInterval(() => {
        console.log(`counter -> ${count++}`);
    }, timeInterval);
};

counter(1, 200);