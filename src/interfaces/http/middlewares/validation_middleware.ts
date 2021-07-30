import { Schema } from 'joi'
import { HttpRequest, HttpResponse } from '@infra/http_server/http'
import { MiddlewareBase } from '@shared/middleware_base'

export class ValidationMiddleware extends MiddlewareBase {
  constructor () {
    super()
  }

  public async handler (httpRequest: HttpRequest, schema: Schema): Promise<HttpResponse> {
    try {
      await schema.validateAsync(httpRequest.body)
      return this.ok()
    } catch (err) {
      return this.unsupportedMediaType({ body: err })
    }
  }
}
