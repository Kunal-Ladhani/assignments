const fs = require('fs');

/* ------------ this is sync operation ----------- */

const expensiveOps = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

// const fileContent = fs.readFileSync('./hello.txt');

// assumes all files as a buffer, and reads it like that.
// Buffer : reads it as a array of bytes

// console.log(fileContent.toLocaleString());

// fs.writeFileSync(`./hello.txt`, `Hello World! \nwrote this file using Node.js \nMy name is kunal Ladhani`);

// const hello = fs.readFileSync(`./hello.txt`, { encoding: "utf-8" });
// console.log(hello);

const input = "You wrote this line into the input file with Node.js...";

fs.writeFile('./hello.txt', input, (err) => {
    if (err) {
        console.log("Failed to write file");
    }
    console.log("Successfully written.");
});

console.log("Files will be read and written into.");

expensiveOps(1000000);

fs.readFile('./hello.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('failed to read file');
    }
    console.log(data);
});


