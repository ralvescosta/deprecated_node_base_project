import { Request, Response } from 'express'
import bcryptjs from 'bcryptjs'
import JWT from 'jsonwebtoken'

import { JWT_SECRET } from '../core/config/env'
import User from '../core/infra/database/entities/users'

export class SignInController {
  public async create (req: Request, res: Response) {
    if (!req.body) {
      return res.status(400).json({ statusCode: 400, message: 'Bad Request' })
    }

    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ statusCode: 400, message: 'Bad Request' })
    }

    const user = await User.findOne({ where: { email: req.body.email } })

    if (!user) {
      return res.status(404).json({ statusCode: 404, message: 'User Not Found' })
    }

    if (!await bcryptjs.compare(password, user.password)) {
      return res.status(401).json({ statusCode: 401, message: 'Unauthorized' })
    }

    const accessToken = JWT.sign({ id: user.id }, JWT_SECRET)

    return res.json({
      id: user.id,
      name: user.name,
      email,
      accessToken
    })
  }
}
