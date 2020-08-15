import { Request, Response } from 'express'
import knex from '../knex/knex'
import bcrypt from 'bcryptjs'
import { HASH_SALT } from '../config/env'

interface User {
  id: number
  name: string,
  email: string
  password: string
}

export class SignUpController {
  async create (req: Request, res: Response) {
    if (!req.body) {
      return res.status(400).json({ statusCode: 400, message: 'Bad Request' })
    }

    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({ statusCode: 400, message: 'Bad Request' })
    }

    const { name, email, password } = req.body

    const isEmailAlreadyRegistered = await knex('users').where({ email }).select('id')

    if (isEmailAlreadyRegistered.length) {
      return res.status(409).json({ statusCode: 409, message: 'Email Already Registered' })
    }

    const passwordHash = await bcrypt.hash(password, HASH_SALT)

    await knex('users').insert({ name, email, password: passwordHash })

    res.status(201).json({})
  }
}
