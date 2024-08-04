const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const { connectToMongo } = require('./db');
const { config } = require('dotenv');


config();

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const URL = process.env.URL;
const PORT = process.env.PORT;

app.listen(PORT, () => {
    connectToMongo(URL);
    console.log(`Server is running on port ${PORT}`);
});
