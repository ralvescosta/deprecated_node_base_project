import { Either, right, BaseError } from '../../../core/business'
import { UserDTO, IRegisterUserUsecase } from '../../business'

export class RegisterUserUsecaseSpy implements IRegisterUserUsecase {
  public async register (params: UserDTO): Promise<Either<BaseError, UserDTO>> {
    return right(params)
  }
}
