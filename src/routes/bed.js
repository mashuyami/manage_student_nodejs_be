import * as controllers from '../controllers'
import express  from 'express'
const router = express.Router()
router.get('/',controllers.getBed)
router.post('/',controllers.createNewBed)
router.put('/',controllers.updateBed)
router.delete('/',controllers.deleteBed)

module.exports = router