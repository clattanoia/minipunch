import { gql } from 'apollo-server-koa'
const fs = require('fs')
const path = require('path')

const typeDefs = []

const dirs = fs.readdirSync(__dirname)

dirs.forEach(dir => {
  const filePath = path.join(__dirname, dir)
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
