
import building from './building'
import bed from './bed'
import room from './room'
import student from './student'
import { notFound } from '../middlewares/handle_error'
const initRoutes = (app) =>{
    app.use('/api/v1/building',building)
    app.use('/api/v1/bed',bed)
    app.use('/api/v1/room',room)
    app.use('/api/v1/student',student)
    app.use(notFound)
}

module.exports = initRoutes