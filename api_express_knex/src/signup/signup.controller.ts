import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'

import { HASH_SALT } from '../core/config/env'
import { User } from '../core/models/users.mode'

import knex from '../core/database'

export class SignUpController {
  async create (req: Request, res: Response) {
    if (!req.body) {
      return res.status(400).json({ statusCode: 400, message: 'Bad Request' })
    }

    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({ statusCode: 400, message: 'Bad Request' })
    }

    const { name, email, password } = req.body

    const isEmailAlreadyRegistered = await knex<User>('users').where({ email }).select('id')

    if (isEmailAlreadyRegistered.length) {
      return res.status(409).json({ statusCode: 409, message: 'Email Already Registered' })
    }

    const passwordHash = await bcrypt.hash(password, HASH_SALT)

    await knex('users').insert<User>({ name, email, password: passwordHash })

    res.status(201).json({})
  }
}
