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

  async create (request: HttpRequest): Promise<any> {
    return ok('created with success')
  };

  async get (httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok('list with success')
  };

  async getById (httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok('get with success')
  };

  async update (httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok('update with success')
  };

  async delete (httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok('deleted with success')
  };
}
