import axios from "axios";
import {deleteUserFailure,deleteUserSuccess,getUsersStart,getUsersSuccess,deleteUserStart,createUserStart,createUserSuccess,createUserFailure} from "./UserActions"
export const getUsers= async(dispatch)=>{
   dispatch(getUsersStart());
try{
    const res=await axios.get("/users",{headers:{
        token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
    }})
    
    dispatch(getUsersSuccess(res.data))
}catch(e){
   dispatch(getUsersFailure());
}
}



export const createUser= async(list,dispatch)=>{
    dispatch(createUserStart());
 try{
     const res=await axios.post("/users",list,{headers:{
         token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
     }})
     
     dispatch(createUserSuccess(res.data))
 }catch(e){
    dispatch(createUserFailure());
 }
 }


export const deleteUser= async(id,dispatch)=>{
    dispatch(deleteUserStart());
 try{
     await axios.delete("/users/"+id,{headers:{
         token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
     }})
     
     dispatch(deleteUserSuccess(id))
 }catch(e){
    dispatch(deleteUserFailure());
 }
 }