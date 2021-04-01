import request from 'supertest'
import app from '../../main/config/app'

describe('Base Routes', () => {
  test('', async () => {
    const response = await request(app)
      .post('/api/base-create')
      .send({
        a: 'a',
        b: 'b',
        c: 'c'
      })

    const { statusCode, body } = response.body

    expect(statusCode).toBe(200)
    expect(body).toBe('created with success')
  })

  test('', async () => {
    const response = await request(app)
      .get('/api/base-get')

    const { statusCode, body } = response.body

    expect(statusCode).toBe(200)
    expect(body).toBe('list with success')
  })

  test('', async () => {
    const response = await request(app)
      .get('/api/base-get/1')

    const { statusCode, body } = response.body

    expect(statusCode).toBe(200)
    expect(body).toBe('get item 1 with success')
  })

  test('', async () => {
    const response = await request(app)
      .put('/api/base-update/1')
      .send({
        a: 'a',
        b: 'b',
        c: 'c'
      })

    const { statusCode, body } = response.body

    expect(statusCode).toBe(200)
    expect(body).toBe('update item 1 with success')
  })

  test('', async () => {
    const response = await request(app)
      .delete('/api/base-delete/1')

    const { statusCode, body } = response.body

    expect(statusCode).toBe(200)
    expect(body).toBe('delete item 1 with success')
  })
})
