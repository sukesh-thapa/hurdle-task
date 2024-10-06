const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Use body-parser to handle JSON
app.use(bodyParser.json());

// Simple in-memory data storage
let courses = [];

// Create - Add a new course
app.post("/coursesss", (req, res) => {
  const { title, description, duration } = req.body;
  const newCourse = { id: courses.length + 1, title, description, duration };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// Read - Get all courses
app.get("/courses", (req, res) => {
  res.json(courses);
});

// Update - Update a course by ID
app.put("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const { title, description, duration } = req.body;

  const course = courses.find((c) => c.id === courseId);
  if (course) {
    course.title = title || course.title;
    course.description = description || course.description;
    course.duration = duration || course.duration;
    res.json(course);
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

// Delete - Delete a course by ID
app.delete("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  courses = courses.filter((course) => course.id !== courseId);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
