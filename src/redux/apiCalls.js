import { publicRequest } from "../requestMethods"
import { loginFailure, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    try{
        const res= await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    }catch(err) {
        dispatch(loginFailure())
    }
}

export const getAllDegrees= async () => {
    try {
        const res= await publicRequest.get("/degree")
        return res.data
    }
    catch (err) {
        
    }
}

export const getDegree= async (id) => {
    try {
        const res= await publicRequest.get(`/degree/find/${id}`)
        // console.log(res.data)
        return res.data
    } 
    catch (err) {

    }
}

export const postDegree= async (data) => {
    try {
        const res = await publicRequest.post("/degree", data)
        // console.log(data)
        // res.status(200).json(res)
    }
    catch(err) {

    }
}