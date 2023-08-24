import db from '../models'
import { Op } from 'sequelize'
import {v4 as generateId} from 'uuid'
export const getBed = ({ page, limit, order, name, available, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true }
        // neu khong co trang hay trang du lieu nho hon 1 thi xap xep se bang 0 con neu nguoc lai thi trang tru di 1 hay + 1   
        const offset = (!page || +page <= 1) ? 0 : (+page - 1)
        const fLimit = +limit || +process.env.LIMIT_PAGE
        queries.offset = offset * fLimit
        queries.limit = fLimit
        if (order) queries.order = [order]
        if (name) query.maGiuong = {
            [Op.substring]: name
        }
        //tim gia tri theo khoang
        if (available) query.soTang = { [Op.between]: available }
        //ham findandcoutall de phan trang = findALL+ count all
        const response = await db.Bed.findAndCountAll({
            where: query,
            ...queries,
            attributes: {
                exclude: ['maPhong']
            }
            ,
            include: [
                { model: db.Room, attributes: { exclude: ['createdAt', 'updatedAt','id'] }, as: 'RoomData' }
            ]
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Canot found bed',
            //truoc baker thuong 1 dau cach
            BedData: response
        })
    } catch (error) {
        reject(error)
    }
})

export const createNewBed = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Bed.findOrCreate({
            where:{maGiuong: body?.maGiuong},
            defaults:{
                ...body,
                id:generateId(),
            
            }
            })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Canot create new  Bed/ma toa nha da ton tai',
        })
        //check truong loi
    } catch (error) {
        reject(error)
    }
})
//UPDATE
export const updateBed = ({bid,...body}) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Bed.update(body,{
      where: {id:bid}
            })

        resolve({
            err: response[0] > 0 ?0: 1,
            mes: response[0]>0 ? `${response[0]} Bed updated` : 'Canot update  Bed',
        })
        //check truong loi
    } catch (error) {
        reject(error)
    }
})


//DELETE

export const deleteBed = (bids) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Bed.destroy({
      where: {id:bids}
            })

        resolve({
            err: response > 0 ?0: 1,
            mes: response>0 ? `${response} Bed(s) delte` : 'Canot delete  Bed',
        })
    } catch (error) {
        reject(error)
    }
})