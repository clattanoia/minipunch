import { gql } from 'apollo-server-koa'
const fs = require('fs')
const path = require('path')

const typeDefs = []

// 同步读取当前目录下所有 .gql 文件
const dirs = fs.readdirSync(__dirname)

dirs.forEach(dir => {
  const filePath = path.join(__dirname, dir)
  // 读取.gql文件
  if (fs.statSync(filePath).isFile && filePath.endsWith('.gql')) {
    const content = fs.readFileSync(filePath, {
      encoding: 'utf-8'
    })

    typeDefs.push(
      gql`
        ${content}
      `
    )
  }
})

export default typeDefs
