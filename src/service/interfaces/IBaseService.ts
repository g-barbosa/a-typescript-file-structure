import { HttpRequest, HttpResponse } from '../../infra/protocols'

export interface IBaseService {
  create: (request: HttpRequest) => Promise<HttpResponse>
  get: (httpRequest: HttpRequest) => Promise<HttpResponse>
  getById: (httpRequest: HttpRequest) => Promise<HttpResponse>
  update: (httpRequest: HttpRequest) => Promise<HttpResponse>
  delete: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
