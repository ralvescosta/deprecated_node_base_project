import { UserSignUpModel } from '../user.signup.model'
import { IUserSignUpRepository } from '../interfaces/user.signup.repository.interface'
import { getRepository } from 'typeorm'
import { User } from '../../shared/models/users'

export class UserSignUpRepository implements IUserSignUpRepository {
  public async findByEmail (email: string): Promise<boolean> {
    const userRepository = getRepository<User>(User)

    const userId = await userRepository.findOne({ where: { email }, select: ['id'] })

    return !!userId
  }

  public async createUser (userParams: UserSignUpModel): Promise<{} | Error> {
    const userRepository = getRepository<User>(User)

    await userRepository.save(userParams)

    return {}
  }
}
