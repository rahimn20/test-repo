const express = require("express");


const {
  getStudents,
  getStudent,
  createStudent,
  deleteStudent,
  updateStudent
} = require('../controllers/studentController');


const router = express.Router();

//All Students
router.get("/", getStudents);

//Specific Student
router.get("/:id", getStudent);

//Create new Student
router.post("/", createStudent);

//Delete specific Student
router.delete("/:id", deleteStudent);

//Update specific Student
router.patch("/:id", updateStudent);


module.exports = router;