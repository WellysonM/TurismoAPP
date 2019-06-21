const express = require("express");
const authMiddleware = require("../../middlewares/auth");

const projectController = require("../controllers/projectController");

const userRouter = express.Router();

//userRouter.get("/", ProjectController.list);
userRouter.get('/tourism', projectController.index);
userRouter.get('/tourism/:id', projectController.show);
userRouter.post('/tourism', projectController.store);
userRouter.put('/tourism/:id', projectController.update);
userRouter.delete('/tourism/:id', projectController.destroy);

module.exports = userRouter;
