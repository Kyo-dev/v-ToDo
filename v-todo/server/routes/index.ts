import { Router } from "express";
const router = Router();

router.get("/task", (req, res) => {
    res.send("Getting task");
})

router.post("/task", (req, res) => {
    res.send("New task");
})

router.get("/task/:id", (req, res) => {
    res.send("Getting task by ID");
})

router.delete("/task/:id", (req, res) => {
    res.send("Deleting task by ID");
})

router.put("/task/:id", (req, res) => {
    res.send("Updating task by ID");
})

export default router;