import { HttpResponse, HttpRequest } from '../../../infra/protocols'
import { IBaseService } from '../../../service/interfaces/IBaseService'
import { IBaseController } from '../interfaces'

export class BaseController implements IBaseController {
  private readonly service: IBaseService
  constructor (service: IBaseService) {
    this.service = service
  }

  async create (request: HttpRequest): Promise<HttpResponse> {
    console.log(await this.service.create(request))
    return await this.service.create(request)
  }

  async get (request: HttpRequest): Promise<HttpResponse> {
    return await this.service.get(request)
  }

  async getById (request: HttpRequest): Promise<HttpResponse> {
    return await this.service.getById(request)
  }

  async update (request: HttpRequest): Promise<HttpResponse> {
    return await this.service.update(request)
  }

  async delete (request: HttpRequest): Promise<HttpResponse> {
    return await this.service.delete(request)
  }
}
