import { Router } from 'express'
import { makeBaseController } from '../factories/base'

export default (router: Router): void => {
  router.post('/base-create', (req, res) => {
    var baseController = makeBaseController()
    var response = baseController.create(req)
    console.log(response)
    res.json(response)
  })

  router.get('/base-get', (req, res) => {
    var baseController = makeBaseController()
    var response = baseController.get(req)
    console.log(response)
    res.json(response)
  })

  router.get('/base-get-by-id', (req, res) => {
    var baseController = makeBaseController()
    var response = baseController.getById(req)
    res.json(response)
  })

  router.put('/base-update', (req, res) => {
    var baseController = makeBaseController()
    var response = baseController.update(req)
    res.json(response)
  })

  router.delete('/base-delete', (req, res) => {
    var baseController = makeBaseController()
    var response = baseController.delete(req)
    res.json(response)
  })
}
