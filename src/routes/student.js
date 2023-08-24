import * as controllers from '../controllers'
import express  from 'express'
import uploadCloud from '../middlewares/uploader'
const router = express.Router()
router.get('/',controllers.getStudent)
router.post('/',controllers.createNewStudent)
router.post('/',uploadCloud.single('image'),controllers.createNewStudent)
router.put('/',uploadCloud.single('image'),controllers.updateStudent)
module.exports = router