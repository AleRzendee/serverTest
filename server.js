import { fastify } from 'fastify'
export { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
  // return 'Hello World'
  database.create({
    title: 'First video',
    description: 'This is my first video',
    duration: 180.
  })

  console.log(database.list())

  return reply.status(201).send()

})

server.get('/videos', () => {

})
server.put('/videos/', () => {
  
})
server.delete('/videos/', () => {
  
})

server.listen({
  port: 3333,
})