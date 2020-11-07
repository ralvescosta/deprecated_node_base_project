import { Either, BaseError } from '../../../core/business'
import { UserDTO } from '../../business'

export interface IRegisterUserUsecase {
  register: (params: UserDTO) => Promise<Either<BaseError, UserDTO>>
}
