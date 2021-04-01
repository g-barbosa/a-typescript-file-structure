import request from 'supertest'
import app from '../../main/config/app'

describe('Base Routes', () => {
  test('', async () => {
    await request(app)
      .post('/api/base-create')
      .send({
        a: 'a',
        b: 'b',
        c: 'c'
      })
      .expect(200)
  })

  test('', async () => {
    await request(app)
      .get('/api/base-get')
      .expect(200)
  })

  test('', async () => {
    await request(app)
      .get('/api/base-get-by-id')
      .expect(200)
  })

  test('', async () => {
    await request(app)
      .put('/api/base-update')
      .send({
        a: 'a',
        b: 'b',
        c: 'c'
      })
      .expect(200)
  })

  test('', async () => {
    await request(app)
      .delete('/api/base-delete')
      .expect(200)
  })
})
