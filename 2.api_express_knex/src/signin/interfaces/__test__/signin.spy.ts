import { ISignIn } from '../../bussiness/usecases/signin.usecases'
import { ISignInModel } from '../../bussiness/models/signin.model'
import { UserSession } from '../../bussiness/models/user.session'

export class SignInSpy implements ISignIn {
  public model: ISignInModel;
  public result = new UserSession(1, 'name', 'email', 'token')

  public async createSession (model: ISignInModel): Promise<UserSession> {
    this.model = model
    return this.result
  }
}
