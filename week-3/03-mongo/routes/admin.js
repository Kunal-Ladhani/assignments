const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course, User } = require('../db');
// Admin Routes
router.post('/signup', async (req, res) => {
    const adminDetails = {
        username: req.get('x-username'),
        password: req.get('x-password')
    };
    console.info(JSON.stringify(adminDetails));
    const existing = await Admin.findOne(adminDetails);
    if (existing) {
        res.status(409).json({ message: "Admin already exists." });
    } else {
        const newAdmin = new Admin(adminDetails);
        await newAdmin.save();
        res.status(200).send({
            message: "Admin created successfully."
        });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const courseDetails = req.body;
    console.info(JSON.stringify(courseDetails));
    const existing = await Course.findOne(courseDetails);
    if (existing) {
        res.status(409).json({ message: "Course already exists." });
    } else {
        const newCourse = new Course(courseDetails);
        const course = await newCourse.save();
        res.status(200).send({
            courseId: course._id,
            message: "Course created successfully."
        });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find({}, { _id: 0, __v: 0 });
    if (!courses) {
        res.status(401).json({ message: "Courses do not exist." });
    }
    res.status(200).json(courses);
});

module.exports = router;