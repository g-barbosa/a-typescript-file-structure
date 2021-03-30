import { IBaseRepository } from '../intefaces'

export class BaseRepository implements IBaseRepository {
  async create (): Promise<any> {
    return null
  }

  async get (): Promise<any> {
    return null
  }

  async getById (): Promise<any> {
    return null
  }

  async update (): Promise<any> {
    return null
  }

  async delete (): Promise<any> {
    return null
  }
}
