// ES6语法引入express模块
import express from 'express'
import userRouter from './router/user_router.js'
const app = express()
// 定义路由
app.use('/api', userRouter)
// 监听8080端口
app.listen(80, () => {
  console.log('serve running in http://127.0.0.1')
})
