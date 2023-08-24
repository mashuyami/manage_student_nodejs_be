import db from '../models'
import { Op } from 'sequelize'
import {v4 as generateId} from 'uuid'
export const getBuilding = ({ page, limit, order, name, available, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true }
        // neu khong co trang hay trang du lieu nho hon 1 thi xap xep se bang 0 con neu nguoc lai thi trang tru di 1 hay + 1   
        const offset = (!page || +page <= 1) ? 0 : (+page - 1)
        const fLimit = +limit || +process.env.LIMIT_PAGE
        queries.offset = offset * fLimit
        queries.limit = fLimit
        if (order) queries.order = [order]
        if (name) query.tenToaNha = {
            [Op.substring]: name
        }
        //tim gia tri theo khoang
        if (available) query.floor = { [Op.between]: available }
        //ham findandcoutall de phan trang = findALL+ count all
        const response = await db.Building.findAndCountAll({
            where: query,
            ...queries,
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Canot found building',
            //truoc baker thuong 1 dau cach
            BuildingData: response
        })
    } catch (error) {
        reject(error)
    }
})


export const createNewBuilding = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Building.findOrCreate({
            where:{maToaNha: body?.maToaNha},
            defaults:{
                ...body,
                id:generateId(),
            
            }
            })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Canot create new  building/ma toa nha da ton tai',
        })
        //check truong loi
    } catch (error) {
        reject(error)
    }
})
//UPDATE
export const updateBuilding = ({bid,...body}) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Building.update(body,{
      where: {id:bid}
            })

        resolve({
            err: response[0] > 0 ?0: 1,
            mes: response[0]>0 ? `${response[0]} building updated` : 'Canot update  building',
        })
        //check truong loi
    } catch (error) {
        reject(error)
    }
})


//DELETE

export const deleteBuilding = (bids) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Building.destroy({
      where: {id:bids}
            })

        resolve({
            err: response > 0 ?0: 1,
            mes: response>0 ? `${response} building(s) delte` : 'Canot delete  building',
        })
    } catch (error) {
        reject(error)
    }
})