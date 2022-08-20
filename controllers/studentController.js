const Student = require('../models/studentModel');

const getStudents = async function (req, res, next) {
  const students = await Student.find({});

  res.status(200).json(students);
};

const getStudent = function () { };

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