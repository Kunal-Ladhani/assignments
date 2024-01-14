const fs = require("fs");
// fs = nodejs library that is giving APIs for file system.

// assumes all files as a buffer, and reads it like that.
// Buffer : reads it as a array of bytes

console.log(" ------------ this is sync operation ----------- ");

// sync read fn
const READ_PATH = "./easy/read-this-file.txt";
const fileContent = fs.readFileSync(READ_PATH);
console.log(fileContent); // this will be a buffer array
console.log(fileContent.toLocaleString());

// we use encoding utf-8
const text = fs.readFileSync(READ_PATH, { encoding: "utf-8" });
console.log(text);

console.log(" ------------ this is Async operation ----------- ");

// async read fn
fs.readFile("easy/hello.txt", "utf-8", function (err, data) {
	// these are called error first callback
	if (err) {
		console.log("failed to read file");
	}
	console.log(data);
});

// this is called busy waiting = keeping the thread busy here in expensive op
const expensiveOps = (n) => {
	let startTime = new Date();
	var sum = 0;
	for (let i = 0; i < n; ++i) {
		sum += i;
	}
	console.log(`expensiveOps() took ${Date.now() - startTime} ms.`);
};

// async fn, so, 'hey there #1' will be printed first
// as it will take some time to read from the file and we used the async operation
console.log("Hey, there! #1");

expensiveOps(3000000000);
// expensive sync op,
// so, 'hey there #2' will be printed last after expensiveOps() is over
// as it will take some time and thread will be kept bust there.
console.log("Hey, there! #2");
