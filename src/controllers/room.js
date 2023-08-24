import *as services from "../service";
import {interalServerError,badRequest} from "../middlewares/handle_error"
import{maToaNha,maPhong,tenPhong,viTriTang,soNguoiToiDa,gioiTinhSV,hinhThucThanhToan,donGia,bid,bids} from "../helpers/joi_schema"
import joi from  'joi'
export const getRoom =async (req,res)=>{
    try {
        const response = await services.getRoom(req.query) 
         return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
        
    }
}
export const createNewRoom = async (req, res) => {
    try {
        const { error } = joi.object({maToaNha,maPhong,tenPhong,viTriTang,soNguoiToiDa,gioiTinhSV,hinhThucThanhToan,donGia }).validate(req.body);
        if (error) {
            return badRequest(error.details[0].message, res);
        }

        const response = await services.createNewRoom(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};
export const updateRoom =async (req,res)=>{
    try {
        // console.log(req.body)
        
const {error} =joi.object({bid}).validate({bid: req.body.bid})
if (error) {
    return badRequest(error.details[0].message, res);
}
    const response = await services.updateRoom(req.body) 
         return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
        
    }
}

// DELETE
export const deleteRoom =async (req,res)=>{
    try {
const {error} =joi.object({bids}).validate(req.query)
if(error) {
    return badRequest(error.details[0].message,res)
}
    const response = await services.deleteRoom(req.query.bids) 
         return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
        
    }
}

