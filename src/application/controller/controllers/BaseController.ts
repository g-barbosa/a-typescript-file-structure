import { HttpResponse, HttpRequest } from '../../../infra/protocols'
import { IBaseService } from '../../../service/interfaces/IBaseService'
import { IBaseController } from '../interfaces'

export class BaseController implements IBaseController {
  private readonly service: IBaseService
  constructor (service: IBaseService) {
    this.service = service
  }

  async create (request: HttpRequest): Promise<HttpResponse> {
    return await this.service.create(request)
  }

  async get (request: HttpRequest): Promise<HttpResponse> {
    return await this.service.get(request)
  }

  async getById (id: string): Promise<HttpResponse> {
    return await this.service.getById(id)
  }

  async update (id: string): Promise<HttpResponse> {
    return await this.service.update(id)
  }

  async delete (id: string): Promise<HttpResponse> {
    return await this.service.delete(id)
  }
}
