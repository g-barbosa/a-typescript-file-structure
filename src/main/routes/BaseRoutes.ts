import { Router } from 'express'
import { makeBaseController } from '../factories/base'
import { asyncMiddleware } from '../middlewares'

export default (router: Router): void => {
  router.post('/base-create', asyncMiddleware(async (req, res) => {
    var baseController = makeBaseController()
    var response = await baseController.create(req)
    res.json(response)
  }))

  router.get('/base-get', asyncMiddleware(async (req, res) => {
    var baseController = makeBaseController()
    var response = await baseController.get(req)
    res.json(response)
  }))

  router.get('/base-get/:id', asyncMiddleware(async (req, res) => {
    var baseController = makeBaseController()
    var response = await baseController.getById(req.params.id)
    res.json(response)
  }))

  router.put('/base-update/:id', asyncMiddleware(async (req, res) => {
    var baseController = makeBaseController()
    var response = await baseController.update(req.params.id)
    res.json(response)
  }))

  router.delete('/base-delete/:id', asyncMiddleware(async (req, res) => {
    var baseController = makeBaseController()
    var response = await baseController.delete(req.params.id)
    res.json(response)
  }))
}
