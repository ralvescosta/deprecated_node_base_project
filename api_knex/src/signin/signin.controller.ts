import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

import { JWT_SECRET } from '../core/config/env'
import { User } from '../core/models/users.mode'

import knex from '../core/database'

export class SignInController {
  async create (req: Request, res: Response) {
    if (!req.body) {
      return res.status(400).json({ statusCode: 400, message: 'Bad Request' })
    }

    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ statusCode: 400, message: 'Bad Request' })
    }

    const { email, password } = req.body

    const [user] = await knex<User>('users').where({ email })

    if (!user) {
      return res.status(404).json({ statusCode: 404, message: 'User Not Found' })
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ statusCode: 401, message: 'Unauthorized' })
    }

    try {
      const accessToken = JWT.sign({ id: user.id }, JWT_SECRET)

      await knex('sessions').insert({
        user_id: user.id,
        user_agent: req.headers?.['user-agent'],
        remote_address: req.connection.remoteAddress,
        remote_port: req.connection.remotePort,
        local_address: req.connection.localAddress,
        local_port: req.connection.localPort,
        access_token: accessToken
      })

      res.status(200).json({ name: user.name, email, accessToken })
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' })
    }
  }
}
