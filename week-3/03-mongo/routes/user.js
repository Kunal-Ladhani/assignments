const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const userDetails = {
        username: req.get('x-username'),
        password: req.get('x-password')
    };
    const existingUser = await User.findOne(userDetails);
    if (!existingUser) {
        const newUser = new User(userDetails);
        await newUser.save();
        res.status(200).json({
            message: 'User created successfully.'
        });
    } else {
        res.status(401).json({
            message: "User credentials already exists!"
        });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({}, { _id: 0, __v: 0 });
    if (courses.length > 0) {
        res.status(200).json(courses);
    } else {
        res.send(404).json({
            message: "Courses not found!"
        });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    console.info(courseId);
    const course = await Course.findById(courseId);
    const userDetails = {
        username: req.get('x-username'),
        password: req.get('x-password')
    };

    if (course === null) {
        return res.status(404).json({
            message: "Course not found!"
        });
    }
    console.info("course found : " + JSON.stringify(course));

    const user = await User.findOne(userDetails);
    if (user.purchasedCourseIds.includes(courseId)) {
        return res.status(409).json({
            message: "Course already purchased!"
        });
    } else {
        user.purchasedCourseIds.push(course._id)
        await user.save();
        return res.status(200).json({ message: 'Course purchased successfully!' });
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const userDetails = {
        username: req.get('x-username'),
        password: req.get('x-password')
    };
    const user = await User.findOne(userDetails, { purchasedCourseIds: 1 });

    // actual logic
    const purchasedCourses = await Course.find({
        _id: {
            "$in": user.purchasedCourseIds
        }
    }, { _id: 0, __v: 0 });

    if (purchasedCourses.length > 0) {
        return res.status(200).json(purchasedCourses);
    } else {
        return res.status(404).json({
            message: "No course purchased!"
        });
    }
});

module.exports = router