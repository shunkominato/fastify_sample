import fastify from 'fastify'
import { createConnection } from 'typeorm'
import { getUserList } from './usecase/user'

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'png\n'
})

server.get('/user', async (request, reply) => {
  const userList = getUserList()

  reply.send(userList);

})

const start = async () => {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: '',
    database: 'ormsample',
    synchronize: false,
    entities: [
      "../orm/src/entity/**/*.ts"
   ],
  })
  server.listen(8080, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })
}
start()
