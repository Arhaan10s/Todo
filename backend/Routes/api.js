const express = require('express');
const router = express.Router();
const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  startTask,
  stopTask,
  completeTask
} = require('../comp/task');

router.post('/tasks', createTask);
router.get('/tasks', getAllTasks);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id/start', startTask);
router.put('/tasks/:id/stop', stopTask);
router.put('/tasks/:id/complete', completeTask);

module.exports = router;