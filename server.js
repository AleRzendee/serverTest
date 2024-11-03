// import { createServer } from 'node:http'

// const server = createServer((require, response) => {
//   response.write('Hi')

//   return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'

server.get('/', () => {
  return 'Hello World'
})
server.get('/hello', () => {
  return 'Hello Yeah'
})

server.get('/node', () => {
  return 'Hello Node.js'
})

const server = fastify()

server.listen({
  port: 3333,
})