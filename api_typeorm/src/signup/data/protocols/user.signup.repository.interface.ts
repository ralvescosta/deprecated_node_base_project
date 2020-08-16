import { UserSignUpModel } from '../../domain/user.signup.model'

export interface IUserSignUpRepository {
  findByEmail(email: string): Promise<boolean>
  createUser(userParams: UserSignUpModel): Promise<{} | Error>
}
