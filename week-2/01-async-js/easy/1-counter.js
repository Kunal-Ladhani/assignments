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

counter();

function countSumToN(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	console.log(sum);
}

// busy waiting
function syncSleep() {
	let startTime = new Date().getTime();
	let a = 1;
	for (let i = 0; i < 10000000000; i++) {
		a++;
	}
	console.log((new Date().getTime() - startTime) / 1000 + "secs passed.");
}

// async behaviour - hello world is printed first!
// setTimeout(countSumToN, 2000, 100);
// console.log('Hello, World');

// sync behaviour
// syncSleep();
// this will keep the thread waiting but it will be busy doing expensive operation called busy waiting.
// console.log('Hello, World');
