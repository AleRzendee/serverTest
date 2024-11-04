// import { createServer } from 'node:http'

// const server = createServer((require, response) => {
//   response.write('Hi')

//   return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'

server.post('/videos', () => {
  return 'Hello World'
})
server.get('/videos', () => {
  return 'Hello World'
})
server.put('/videos/', () => {
  return 'Hello World'
})
server.delete('/videos/', () => {
  return 'Hello World'
})

const server = fastify()

server.listen({
  port: 3333,
})