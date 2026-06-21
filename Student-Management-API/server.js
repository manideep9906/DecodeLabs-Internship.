const express = require("express");

const app = express();

app.use(express.json());

let students = [
  {
    id: 1,
    name: "Rahul",
    course: "Python"
  },
  {
    id: 2,
    name: "Priya",
    course: "Web Development"
  }
];

// Home Route
app.get("/", (req, res) => {
  res.send("Student Management API Running");
});

// GET All Students
app.get("/students", (req, res) => {
  res.json(students);
});

// GET Student By ID
app.get("/students/:id", (req, res) => {

  const student = students.find(
    s => s.id == req.params.id
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.json(student);
});

// POST New Student
app.post("/students", (req, res) => {

  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      message: "Name and Course are required"
    });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    course
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student Added Successfully",
    student: newStudent
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});