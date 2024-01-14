/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function busyWait(ms) {
    let start = Date.now();
    let a = 0;
    // will keep running loop till ms has passed, will keep checking till then
    while (start + ms >= Date.now()) {
        a++;
    }
}

function sleep(milliseconds) {
    return new Promise(function (resolve, reject) {
        // setTimeout(() => { }, milliseconds); 
        // this will not busy wait - it is an async fn, it will keep it in web api and go to next line, will come back to it once done.
        busyWait(milliseconds);// thread is stuck here till ms have passed
        resolve();
    });
}

module.exports = sleep;


