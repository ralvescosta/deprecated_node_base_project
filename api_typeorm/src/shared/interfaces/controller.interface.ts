import { HttpRequest, HttpResponse } from '../adapters/http.adapt'

export interface IController {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
