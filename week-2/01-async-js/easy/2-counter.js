// jab tak timeout print kare tab tak while aage badh jata hai

const counter = (count = 1, timeInterval = 1000) => {
	let i = 0;
	while (i < 10) {
		setTimeout(() => {
			console.log(`Counter -> ${count++}`);
			i++;
		}, timeInterval);
	}
};

counter();
