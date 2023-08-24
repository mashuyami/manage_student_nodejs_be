import *as services from "../service";
import {interalServerError,badRequest} from "../middlewares/handle_error"
import{maToaNha,tenToaNha,soTang,bid,bids} from "../helpers/joi_schema"
import joi from  'joi'

export const getBuilding =async (req,res)=>{
    try {
        const response = await services.getBuilding(req.query) 
         return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
        
    }
}
export const createNewBuilding = async (req, res) => {
    try {
        const { error } = joi.object({maToaNha,tenToaNha,soTang }).validate(req.body);
        if (error) {
            return badRequest(error.details[0].message, res);
        }

        const response = await services.createNewBuilding(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};
export const updateBuilding =async (req,res)=>{
    try {
        // console.log(req.body)
        
const {error} =joi.object({bid}).validate({bid: req.body.bid})
if (error) {
    return badRequest(error.details[0].message, res);
}
    const response = await services.updateBuilding(req.body) 
         return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
        
    }
}

// DELETE
export const deleteBuilding =async (req,res)=>{
    try {
const {error} =joi.object({bids}).validate(req.query)
if(error) {
    return badRequest(error.details[0].message,res)
}
    const response = await services.deleteBuilding(req.query.bids) 
         return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
        
    }
}

