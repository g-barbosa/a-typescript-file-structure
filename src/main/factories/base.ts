import { BaseController } from '../../application/controller/controllers'
import { IBaseController } from '../../application/controller/interfaces'
import { BaseRepository } from '../../infra/data/repository/repositories'
import { BaseService } from '../../service/services/BaseService'

export const makeBaseController = (): IBaseController => {
  const baseRepository = new BaseRepository()
  const baseService = new BaseService(baseRepository)

  return new BaseController(baseService)
}
