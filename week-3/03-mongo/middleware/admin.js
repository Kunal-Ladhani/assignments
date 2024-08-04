const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.get('x-username');
    const password = req.get('x-password');
    const credentials = { username, password };
    // console.info(credentials);
    // unlike <your-company>, never log sensitive data!!
    const existing = await Admin.findOne(credentials);
    if (!existing) {
        res.status(401).json({
            message: "Incorrect Credentials."
        });
    } else {
        console.info(`${existing.username} is here!`);
        next();
    }
}

module.exports = adminMiddleware;