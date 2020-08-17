import { getRepository } from 'typeorm'

import { UserSignUpModel } from '../domain/user.signup.model'

import { IUserSignUpRepository } from '../data/protocols/user.signup.repository.interface'

import { UserEntity } from '../../core/infra/entities/users.entity'

export class UserSignUpRepository implements IUserSignUpRepository {
  public async findByEmail (email: string): Promise<boolean> {
    const userRepository = getRepository<UserEntity>(UserEntity)

    const userId = await userRepository.findOne({ where: { email }, select: ['id'] })

    return !!userId
  }

  public async createUser (userParams: UserSignUpModel): Promise<{} | Error> {
    const userRepository = getRepository<UserEntity>(UserEntity)

    await userRepository.save(userParams)

    return {}
  }
}
