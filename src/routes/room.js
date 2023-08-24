import * as controllers from '../controllers'
import express  from 'express'
const router = express.Router()
router.get('/',controllers.getRoom)
router.post('/',controllers.createNewRoom)
router.put('/',controllers.updateRoom)
router.delete('/',controllers.deleteRoom)
module.exports = router