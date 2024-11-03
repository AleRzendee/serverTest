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

const server = fastify()

server.listen({
  port: 3333,
})