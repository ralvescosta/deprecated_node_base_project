import { ISignInModel } from '../models/signin.model'
import { UserSession } from '../models/user.session'

export interface ISignIn {
  createSession:(model: ISignInModel) => Promise<UserSession>
}
