const fs = require('fs');
// nodejs library that is giving APIs for file system.

/* ------------ this is sync operation ----------- */

const expensiveOps = (n) => {
    let startTime = new Date()
    var sum = 0;
    for (let i = 0; i < n;) {
        sum += i++;
    }
    console.log(sum);
}

// const fileContent = fs.readFileSync('./hello.txt');

// assumes all files as a buffer, and reads it like that.
// Buffer : reads it as a array of bytes

// console.log(fileContent.toLocaleString());

// fs.writeFileSync(`./hello.txt`, `Hello World! \nwrote this file using Node.js \nMy name is kunal Ladhani`);

// const hello = fs.readFileSync(`./hello.txt`, { encoding: "utf-8" });
// console.log(hello);

// const input = "You wrote this line into the input file with NodeJS";

// fs.writeFile('./hello.txt', input, (err) => {
//     if (err) {
//         console.log("Failed to write file");
//     }
//     console.log("Successfully written.");
// });

// console.log("Files will be read and written into.");

// expensiveOps(1000000);

// this is a async fn so hey there will be printed first, as it will take some time to read from the file.
fs.readFile('easy/hello.txt', 'utf-8', function (err, data) {
    // these are called error first callback
    // if (err) {
    //     console.log('failed to read file');
    // }
    console.log(data);
});

console.log('Hey, there! #1');

expensiveOps(3000000000);

console.log('Hey, there! #2');


