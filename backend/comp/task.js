const todo = require('../models/todo');

exports.createTask = async (req, res) => {
    const { title, description} = req.body;
    try{
        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        const newTask = await todo.create({
            title,
            description,
            status: 'To Do'
        });

        res.status(201).json(newTask);
    }catch(error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await todo.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    try {
        const task = await todo.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.title = title || task.title;
        task.description = description || task.description;
        task.status = status || task.status;

        await task.save();
        res.status(200).json(task);
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.deleteTask = async(req, res) => {
    const { id } = req.params;
    try {
        const task = await todo.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.destroy();
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.startTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await todo.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.status = 'In Progress';
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        console.error('Error starting task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
exports.stopTask=async (req, res) => {
    const { id } = req.params;
    try {
        const task = await todo.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.status = 'To Do';
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        console.error('Error stopping task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.completeTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await todo.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.status = 'Done';
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        console.error('Error completing task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}