import { BaseRepository } from '../../../infra/data/repository/repositories'
import { BaseService } from '../../../service/services/BaseService'

interface SutTypes {
  sut: BaseService
}

const makeBaseRepostory = (): BaseRepository => {
  const baseRepository = new BaseRepository()
  return baseRepository
}

const makeSut = (): SutTypes => {
  const baseRepository = makeBaseRepostory()
  const sut = new BaseService(baseRepository)
  return {
    sut
  }
}

describe('BaseService Tests', () => {
  test('Should return success when create new item', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      body: {
        a: 'a',
        b: 'b',
        c: 'c'
      }
    }
    const response = await sut.create(httpRequest)
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual('created with success')
  })

  test('Should return success when list items', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      body: {
        a: 'a',
        b: 'b',
        c: 'c'
      }
    }
    const response = await sut.get(httpRequest)
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual('list with success')
  })

  test('Should return success when get an item', async () => {
    const { sut } = makeSut()

    const response = await sut.getById('1')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual('get item 1 with success')
  })

  test('Should return success when update an item', async () => {
    const { sut } = makeSut()

    const response = await sut.update('1')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual('update item 1 with success')
  })

  test('Should return success when delete an item', async () => {
    const { sut } = makeSut()

    const response = await sut.delete('1')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual('delete item 1 with success')
  })
})
