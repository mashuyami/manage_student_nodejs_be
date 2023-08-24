import db from '../models'
import { Op } from 'sequelize'
import {v4 as generateId} from 'uuid'
export const getRoom = ({ page, limit, order, name, available, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true }
        // neu khong co trang hay trang du lieu nho hon 1 thi xap xep se bang 0 con neu nguoc lai thi trang tru di 1 hay + 1   
        const offset = (!page || +page <= 1) ? 0 : (+page - 1)
        const fLimit = +limit || +process.env.LIMIT_PAGE
        queries.offset = offset * fLimit
        queries.limit = fLimit
        if (order) queries.order = [order]
        if (name) query.tenPhong = {
            [Op.substring]: name
        }
        //tim gia tri theo khoang
        if (available) query.viTriTang = { [Op.between]: available }
        //ham findandcoutall de phan trang = findALL+ count all
        const response = await db.Room.findAndCountAll({
            where: query,
            ...queries,
            attributes: {
                exclude: ['maToaNha']
            }
            ,
            include: [
                { model: db.Building, attributes: { exclude: ['createdAt', 'updatedAt','id'] }, as: 'BuildingData' }
            ]
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Canot found book',
            //truoc baker thuong 1 dau cach
            RoomData: response
        })
    } catch (error) {
        reject(error)
    }
})

export const createNewRoom = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Room.findOrCreate({
            where:{maPhong: body?.maPhong},
            defaults:{
                ...body,
                id:generateId(),
            }
            })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Canot create new  Room/ma phong da ton tai',
        })
        //check truong loi
    } catch (error) {
        reject(error)
    }
})
//UPDATE
export const updateRoom = ({bid,...body}) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Room.update(body,{
      where: {id:bid}
            })

        resolve({
            err: response[0] > 0 ?0: 1,
            mes: response[0]>0 ? `${response[0]} Room updated` : 'Canot update  Room',
        })
        //check truong loi
    } catch (error) {
        reject(error)
    }
})


//DELETE

export const deleteRoom = (bids) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Room.destroy({
      where: {id:bids}
            })

        resolve({
            err: response > 0 ?0: 1,
            mes: response>0 ? `${response} Room(s) deltete` : 'Canot delete  Room',
        })
    } catch (error) {
        reject(error)
    }
})