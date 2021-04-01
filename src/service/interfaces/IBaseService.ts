import { HttpRequest, HttpResponse } from '../../infra/protocols'

export interface IBaseService {
  create: (request: HttpRequest) => Promise<HttpResponse>
  get: (httpRequest: HttpRequest) => Promise<HttpResponse>
  getById: (id: string) => Promise<HttpResponse>
  update: (id: string) => Promise<HttpResponse>
  delete: (id: string) => Promise<HttpResponse>
}
