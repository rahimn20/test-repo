const express = require("express");
const mongoose = require("mongoose");

require('dotenv').config({ path: './.env' });

const Student = require("./models/studentModel")
const studentRouter = require('./routes/studentRoutes');

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to DB. ');
  });


app.use('/students', studentRouter);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
