const express = require("express");
const authMiddleware = require("../../middlewares/auth");

const ProjectController = require("../controllers/projectController");

const userRouter = express.Router();

userRouter.use(authMiddleware);

//userRouter.get("/", ProjectController.list);
userRouter.get('/tourism', ProjectController.index);
userRouter.get('/tourism/:id', ProjectController.show);
userRouter.post('/tourism', ProjectController.store);
userRouter.put('/tourism/:id', ProjectController.update);
userRouter.delete('/tourism/:id', ProjectController.destroy);

module.exports = userRouter;
