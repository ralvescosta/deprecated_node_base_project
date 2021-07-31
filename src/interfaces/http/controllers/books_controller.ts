import InternalError from '@app/erros/internal_error'
import ICreateBookUsecase from '@business/usecases/i_create_book_usecase'
import { HttpRequest, HttpResponse } from '@infra/http_server/http'
import IControllerBase from '@shared/i_controller_base'
import IHttpResponseFactory from '@shared/i_http_response_factory'

type Injection = {
  httpResponseFactory: IHttpResponseFactory
  createBookUsecase: ICreateBookUsecase
}
export default ({ httpResponseFactory, createBookUsecase }: Injection): Omit<IControllerBase, 'findOrCreate'> => ({
  create: async (httpRequest: HttpRequest): Promise<HttpResponse> => {
    const result = await createBookUsecase.perform(httpRequest.body)
    if (result.isLeft()) {
      switch (result.value.constructor) {
        case InternalError:
          return httpResponseFactory.internalServerError()
        default:
          return httpResponseFactory.badRequest()
      }
    }
    return httpResponseFactory.created()
  },
  findOne: async (): Promise<HttpResponse> => {
    return httpResponseFactory.ok()
  },
  findAll: async (): Promise<HttpResponse> => {
    return httpResponseFactory.ok()
  },
  update: async (): Promise<HttpResponse> => {
    return httpResponseFactory.ok()
  },
  delete: async (): Promise<HttpResponse> => {
    return httpResponseFactory.ok()
  }
})
