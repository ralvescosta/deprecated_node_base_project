import { ISignUp } from '../../bussiness/usecases/signup.usescase'
import { CreateUserModel } from '../../bussiness/models/create.user.model'
import { ResultCreateUserModel } from '../../bussiness/models/result.create.user.model'

export class SignUpSpy implements ISignUp {
  public model: CreateUserModel;
  public result = new ResultCreateUserModel(1, 'name', 'email', 'token')

  public async createUser (model: CreateUserModel): Promise<ResultCreateUserModel> {
    this.model = model
    return this.result
  }
}
