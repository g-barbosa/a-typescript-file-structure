import { HttpResponse, HttpRequest } from '../../infra/protocols'
import { IBaseService } from '../interfaces'
import { ok } from '../../infra/helpers'
import { IBaseRepository } from '../../infra/data/repository/intefaces'
import { BaseRepository } from '../../infra/data/repository/repositories'

export class BaseService implements IBaseService {
  private readonly baseRepository: IBaseRepository

  constructor (baseRepository: IBaseRepository) {
    this.baseRepository = new BaseRepository()
  }

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
