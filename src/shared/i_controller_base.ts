import { HttpRequest, HttpResponse } from '@infra/http_server/http'

export default interface IControllerBase {
  create: (httpRequest: HttpRequest) => Promise<HttpResponse>
  findOne: (httpRequest: HttpRequest) => Promise<HttpResponse>
  findAll: (httpRequest: HttpRequest) => Promise<HttpResponse>
  update: (httpRequest: HttpRequest) => Promise<HttpResponse>
  delete: (httpRequest: HttpRequest) => Promise<HttpResponse>
  findOrCreate: (httpRequest: HttpRequest) =>Promise<HttpResponse>
}
