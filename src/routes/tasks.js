const express = require('express');
const router = express.Router();

const tasks = [
  { id: 1, title: "Learn Git", completed: false },
  { id: 2, title: "Practice DevOps", completed: true }
];

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST a new task
router.post('/', (req, res) => {
  console.log("POST /tasks called with body:", req.body); // <--- debug

  const { title, completed } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: completed || false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

module.exports = router;