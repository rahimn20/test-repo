const Student = require('../models/studentModel');

const getStudents = async function (req, res, next) {
  const students = await Student.find({});

  res.status(200).json(students);
};

const getStudent = async function (req, res, next) {
  console.log(req.params.id);
  Student.findById(req.params.id)
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  })
 };

const createStudent = function () { };

const deleteStudent = function () { };

const updateStudent = function () { };

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  deleteStudent,
  updateStudent
}