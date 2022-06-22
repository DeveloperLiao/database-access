import db from '../db/index.js'
export async function getAllUser(req, res) {
  try {
    const [row] = await db.query('select id,username,nickname from ev_users')
    res.send({
      status: 0,
      message: '获取用户数据成功！',
      data: row
    })
  } catch (err) {
    res.send({
      status: 1,
      message: '获取用户列表错误',
      desc: err.message
    })
  }
}
