/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

const sleep = require("./2-sleep-completely");

function wait1(t) {
	return new Promise((resolve, reject) => {
		// sleep(t * 1000);
		// resolve();
		// this will not work here as the thread will be blocked by fn1 then fn2 then fn3,
		// so the ops will not be performed in parallel as thread is waiting for fn1 to finish execution.
		// t1 + t2 + t3 time will be taken

		setTimeout(resolve, t * 1000);
		// here, the JS engine will not wait for fn1 to finish, it will start fn2 also parallely!
		// max(t1,t2,t3) time taken here
	});
}

function wait2(t) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, t * 1000);
	});
}

function wait3(t) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, t * 1000);
	});
}

function calculateTime(t1, t2, t3) {
	const start = Date.now();

	return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
		return Date.now() - start;
	});
}

module.exports = calculateTime;
