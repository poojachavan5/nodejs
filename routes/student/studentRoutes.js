// Calling express for its Routes functionality
const express = require('express');
const router = express.Router();
// Calling the Controller
const studentController = require('../../controllers/student/studentController');+

// Calling the Routes for the function created inside studentController
// We call it using the name given to it during exports 'studentlistwise'
// We are using post methods to fetch the data, there are get and other methods too
router.post('/studentdata', studentController.studentlistwise);

// Finally export the routers
// This will be written once and will export all the routers in this file.
module.exports = router;