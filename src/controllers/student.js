import *as services from "../service";
import {interalServerError,badRequest} from "../middlewares/handle_error"
import{maSV,maGiuong,hoTen,filename,avatar,bid,bids} from "../helpers/joi_schema"
import joi from  'joi'
const cloudinary = require('cloudinary').v2;
export const getStudent =async (req,res)=>{
    try {
        const response = await services.getStudent(req.query) 
         return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
        
    }
}
// CREATE 
export const createNewStudent =async (req,res)=>{
    try {
        //1 anh : file ,nhieu anh : files
 
        const fileData = req.file
const {error} =joi.object({maSV,maGiuong,avatar,hoTen}).validate({...req.body, avatar :fileData?.path})
if(error) {
 if(fileData) cloudinary.uploader.destroy(fileData.filename)
    return badRequest(error.details[0].message,res)
}
 const response = await services.createNewStudent(req.body,fileData) 
 console.log(response)
 return res.status(200).json(response)

        } catch (error) {
        return interalServerError(res)
        
    }
}
// UPDATE
export const updateStudent =async (req,res)=>{
    try {
        //1 anh : file ,nhieu anh : files
        const fileData = req.file
const {error} =joi.object({bid}).validate({bid: req.body.bid})
if(error) {
 if(fileData) cloudinary.uploader.destroy(fileData.filename)
    return badRequest(error.details[0].message,res)
}
    const response = await services.updateStudent(req.body,fileData) 
         return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
        
    }
}

// DELETE
export const deleteStudent =async (req,res)=>{
    try {
const {error} =joi.object({bids,filename}).validate(req.query)
if(error) {
    return badRequest(error.details[0].message,res)
}
    const response = await services.deleteStudent(req.query.bids,req.query.filename) 
         return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
        
    }
}


