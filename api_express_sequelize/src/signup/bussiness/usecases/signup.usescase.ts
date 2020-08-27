import { CreateUserModel } from '../models/create.user.model'
import { ResultCreateUserModel } from '../models/result.create.user.model'

export interface ISignUp {
  createUser:(model: CreateUserModel) => Promise<ResultCreateUserModel>
}
