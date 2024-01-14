const fs = require("node:fs");

// sync operations
const WRITE_PATH = `./easy/write-here.txt`;
const strToWrite = `Hello World! \nwrote this file using Node.js \nMy name is kunal Ladhani\n'`;
fs.writeFileSync(WRITE_PATH, strToWrite);

// async operation
const input = "You wrote this line into the input file with NodeJS\n";
fs.appendFile(WRITE_PATH, input, (err) => {
	if (err) {
		console.log("Failed to write file");
	}
	console.log("Successfully written.");
});

// we can also specify encoding
// these are error first callbacks
fs.writeFile(
	"./easy/hello.txt",
	"abra kadabra",
	{ encoding: "utf-8" },
	(err) => {
		if (err) {
			console.log("Failed to write file");
		}
		console.log("Successfully written.");
	}
);

// input can be string or Buffer array
const data = new Uint8Array(Buffer.from("Hello Node.js\n"));
fs.writeFile(WRITE_PATH, data, { encoding: "utf-8" }, (err) => {
	if (err) {
		console.log("Failed to write file");
	}
	console.log("Successfully written.");
});
