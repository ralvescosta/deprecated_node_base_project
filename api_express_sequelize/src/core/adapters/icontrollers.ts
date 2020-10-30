import { HttpRequest, HttpResponse } from './http.adapt'

export interface IController {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
