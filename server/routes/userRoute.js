import express from "express";
import {createUser, DeleteUserById, editUserByid, getUser, getUserByid} from "../controller/userController.js"
const router = express.Router();

router.post("/create",createUser)
router.get("/get",getUser)
router.get("/getbyuseId/:id",getUserByid)
router.put("/editUser/:id",editUserByid)
router.delete("/deleteUser/:id",DeleteUserById)

export default router;