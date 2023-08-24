import db from '../models'
import { Op } from 'sequelize'
import {v4 as generateId} from 'uuid'
const cloudinary = require('cloudinary').v2;
export const getStudent = ({ page, limit, order, name, available, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true }
        // neu khong co trang hay trang du lieu nho hon 1 thi xap xep se bang 0 con neu nguoc lai thi trang tru di 1 hay + 1   
        const offset = (!page || +page <= 1) ? 0 : (+page - 1)
        const fLimit = +limit || +process.env.LIMIT_PAGE
        queries.offset = offset * fLimit
        queries.limit = fLimit
        if (order) queries.order = [order]
        if (name) query.hoTen = {
            [Op.substring]: name
        }
        //tim gia tri theo khoang
        if (available) query.namVaoTruong = { [Op.between]: available }
        //ham findandcoutall de phan trang = findALL+ count all
        const response = await db.Student.findAndCountAll({
            where: query,
            ...queries,
            attributes: {
                exclude: ['maGiuong']
            },
            include: [
                {
                    model: db.Bed,
                    attributes: { exclude: ['createdAt', 'updatedAt', 'id'] },
                    as: 'BedData',
                    
                    
                    include: [
                        {
                            model: db.Room,
                            attributes: { exclude: ['createdAt', 'updatedAt', 'id'] },
                            as: 'RoomData',
                
                            include: [
                                {
                                    model: db.Building,
                                    attributes: {
                                        include: ['maToaNha', 'tenToaNha', 'soTang', 'trangThai'],
                                        exclude: ['createdAt', 'updatedAt', 'id']
                                    }, as: 'BuildingData'
                                }
                                
                            ]
                        }
                    ]
                }
            ]
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Canot found student',
            //truoc baker thuong 1 dau cach
            StudentData: response
        })
    } catch (error) {
        reject(error)
    }
})
export const createNewStudent = (body,fileData) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Student.findOrCreate({
            where:{maSV: body?.maSV},
            defaults:{
                ...body,
                id:generateId(),
                image: fileData?.path,
                filename: fileData?.filename
            
            }
            })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Canot create new  Student',
        })
        //check truong loi
        if(fileData && !response[1]) cloudinary.uploader.destroy(fileData.filename)
    } catch (error) {
        reject(error)
        if(fileData && !response[1]) cloudinary.uploader.destroy(fileData.filename)
    }
})
//UPDATE
export const updateStudent = ({bid,...body},fileData) => new Promise(async (resolve, reject) => {
    try {
            if(fileData) body.image = fileData?.path
        const response = await db.Student.update(body,{
      where: {id:bid}
            })

        resolve({
            err: response[0] > 0 ?0: 1,
            mes: response[0]>0 ? `${response[0]} Student updated` : 'Canot update  Student',
        })
        //check truong loi
        if(fileData && !response[0]==0) cloudinary.uploader.destroy(fileData.filename)
    } catch (error) {
        reject(error)
        if(fileData) cloudinary.uploader.destroy(fileData.filename)
    }
})

//DELETE

export const deleteStudent = (bids,filename) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Student.destroy({
      where: {id:bids}
            })

        resolve({
            err: response > 0 ?0: 1,
            mes: response>0 ? `${response} Student(s) delte` : 'Canot delete  Student',
        })
      cloudinary.api.delete_resources(filename)
    } catch (error) {
        reject(error)
    }
})