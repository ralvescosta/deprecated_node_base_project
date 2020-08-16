import { Request, Response } from 'express'
import User from '../core/infra/database/entities/users'

export class SignInController {
  public async create (req: Request, res: Response) {
    if (!req.body) {
      return res.status(400).json({ statusCode: 400, message: 'Bad Request' })
    }
    const user = await User.findOne({ where: { email: req.body.email } })

    if (user) {
      return res.status(409).json({ statusCode: 409, message: 'User Already Exist' })
    }

    await User.create({ name: req.body.name, email: req.body.email, password: req.body.password })

    console.log(user)

    return res.json({})
  }
}
