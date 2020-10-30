import { HttpRequest, HttpResponse } from '../business/http.adapt'

export interface IController {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
