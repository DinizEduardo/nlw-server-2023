import 'dotenv/config'

import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import fastify from 'fastify'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // TODAS urls de front end poderão acessar nosso back-end
  // origin: ['localhost:3000', '...']
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(memoriesRoutes)

app.register(authRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running on http://localhost:3333 ✔')
  })
