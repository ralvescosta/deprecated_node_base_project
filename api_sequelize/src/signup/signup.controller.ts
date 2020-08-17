import { Request, Response } from 'express'
import bcryptjs from 'bcryptjs'

import { HASH_SALT } from '../core/config/env'
import User from '../core/infra/database/entities/users'

export class SignUpController {
  public async create (req: Request, res: Response) {
    if (!req.body) {
      return res.status(400).json({ statusCode: 400, message: 'Bad Request' })
    }

    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ statusCode: 400, message: 'Bad Request' })
    }

    const user = await User.findOne({ where: { email: req.body.email } })

    if (user) {
      return res.status(409).json({ statusCode: 409, message: 'User Already Exist' })
    }

    const passwordHash = await bcryptjs.hash(password, HASH_SALT)
    await User.create({ name, email, password: passwordHash })

    return res.json({})
  }
}
