import *as services from "../service";
import {interalServerError,badRequest} from "../middlewares/handle_error"
import{maGiuong,maPhong,viTriGiuong,bid,bids} from "../helpers/joi_schema"
import joi from  'joi'
export const getBed =async (req,res)=>{
    try {
        const response = await services.getBed(req.query) 
         return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
        
    }
}
export const createNewBed = async (req, res) => {
    try {
         console.log(req.body)
        const { error } = joi.object({maGiuong,maPhong,viTriGiuong }).validate(req.body);
        if (error) {
            return badRequest(error.details[0].message, res);
        }

        const response = await services.createNewBed(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
}


export const updateBed =async (req,res)=>{
    try {
        // console.log(req.body)
        
const {error} =joi.object({bid}).validate({bid: req.body.bid})
if (error) {
    return badRequest(error.details[0].message, res);
}
    const response = await services.updateBed(req.body) 
         return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
        
    }
}

// DELETE
export const deleteBed =async (req,res)=>{
    try {
const {error} =joi.object({bids}).validate(req.query)
if(error) {
    return badRequest(error.details[0].message,res)
}
    const response = await services.deleteBed(req.query.bids) 
         return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
        
    }
}

