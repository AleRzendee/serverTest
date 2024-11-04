import { fastify } from 'fastify'
export { DatabaseMemory } from './database-memory.js'

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