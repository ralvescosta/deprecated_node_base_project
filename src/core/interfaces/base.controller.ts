import { HttpRequest, HttpResponse } from '../infrastructure'

export interface IBaseController {
  handle:(request: HttpRequest) => Promise<HttpResponse>;
}
