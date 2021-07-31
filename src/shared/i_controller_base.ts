import { HttpResponse } from '@infra/http_server/http'

export default interface IControllerBase {
  create: () => Promise<HttpResponse>
  findOne: () => Promise<HttpResponse>
  findAll: () => Promise<HttpResponse>
  update: () => Promise<HttpResponse>
  delete: () => Promise<HttpResponse>
  findOrCreate: () =>Promise<HttpResponse>
}
