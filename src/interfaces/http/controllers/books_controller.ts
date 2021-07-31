import { HttpResponse } from '@infra/http_server/http'
import { IControllerBase } from '@shared/i_controller_base'
import { IHttpResponseFactory } from '@shared/i_http_response_factory'

type Injection = {
  httpResponseFactory: IHttpResponseFactory
}
export default ({ httpResponseFactory }: Injection): Omit<IControllerBase, 'findOrCreate'> => ({
  create: async (): Promise<HttpResponse> => {
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
