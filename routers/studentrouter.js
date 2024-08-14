import express from 'express'
import * as controller from "../contollers/studentController.js"
const router  = express.Router();

router.post("/create/student",controller.createStudent);
router.delete("/delete/student/:id",controller.deleteStudent);
export default router;