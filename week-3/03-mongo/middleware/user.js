const { User } = require('../db');

async function userMiddleware(req, res, next) {
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const userDetails = {
        username: req.get('x-username'),
        password: req.get('x-password')
    };
    const existingUser = await User.findOne(userDetails);
    if (existingUser) {
        console.info(`${existingUser.username} is using the server!`);
        next();
    } else {
        console.error(userDetails);
        res.status(401).json({ message: "User credentials are incorrect!" });
    }
}

module.exports = userMiddleware;