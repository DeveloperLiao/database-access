import express from 'express'
import { getAllUser } from '../controller/user_ctrl.js'
// 定义express的router方法
const router = new express.Router()  
router.get('/user', getAllUser)
export default router
