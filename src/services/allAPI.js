import { serverURL } from "./serverURL"
import { commonAPI } from "./commonAPI"


// upload  emp details
export const uploadDetails = async (reqBody)=>{
    // post http request to http://localhost:4000/emp-details to add details in json server to Add component 
    return await commonAPI("POST", `${serverURL}/emp-details`,reqBody)
}

// get  emp details
export const getAllDetails = async ()=>{
    // get http request to http://localhost:4000/emp-details to get all  details in json server to View component 
    return await commonAPI("GET", `${serverURL}/emp-details`,"")
}

// get  emp details
export const getADetails = async (id)=>{
    // get http request to http://localhost:4000/emp-details/id to get all  details in json server to View component 
    return await commonAPI("GET", `${serverURL}/emp-details/${id}`,"")
}

// delete emp details
export const deleteADetail = async(id)=>{
    // delete http request to http://localhost:4000/emp-details/id to delete an employee detail in json server to view component
    return await commonAPI("DELETE", `${serverURL}/emp-details/${id}`,{})
}

// update a detail
export const updateEmpDetail = async (Body,id)=>{
    return await commonAPI("PUT", `${serverURL}/emp-details/${id}`,Body)
}