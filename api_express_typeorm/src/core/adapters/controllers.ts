import { HttpRequest, HttpResponse } from './http.adapt'

export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
