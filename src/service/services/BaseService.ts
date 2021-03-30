import { HttpResponse, HttpRequest } from '../../infra/protocols'
import { IBaseService } from '../interfaces'
import { ok } from '../../infra/helpers'

export class BaseService implements IBaseService {
  async create (request: HttpRequest): Promise<HttpResponse> {
    return ok()
  };

  async get (httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok()
  };

  async getById (httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok()
  };

  async update (httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok()
  };

  async delete (httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok()
  };
}
