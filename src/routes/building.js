import * as controllers from '../controllers'
import express  from 'express'
const router = express.Router()
router.get('/',controllers.getBuilding)
router.post('/',controllers.createNewBuilding)
router.put('/',controllers.updateBuilding)
router.delete('/',controllers.deleteBuilding)

module.exports = router

