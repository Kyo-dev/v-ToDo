//I'M NOT GOING TO VALIDATE AT ALL CAUSE THIS IS JUST TO HAVE A SERVER IN ORDER TO CONNECT WITH VUE 3 CLIENT
import Task from '../models/Task';
import { Router } from "express";

const router = Router();

router.get("/task", async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.send(tasks);
})

router.post("/task", async (req, res) => {
    const {title, description} = req.body
    const task = new Task({
        title,
        description
    });
    console.log(task)
    await task.save();
    res.json(task);
})

router.get("/task/:id", async (req, res) => {
    try {
        const taskById = await Task.findById(req.params.id)
        res.send(taskById);
    } catch (error) {
        return res.status(500).json({
            message: "error"
        })
    }
})

router.delete("/task/:id", async (req, res) => {
    try {
        const taskById = await Task.findByIdAndDelete(req.params.id)
        res.send(taskById);
        
    } catch (error) {
        return res.status(500).json({
            message: "error"
        })
    }
})

router.put("/task/:id", async(req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.json(updatedTask);
})

export default router;