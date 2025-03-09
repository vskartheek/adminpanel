import axios from "axios";
import {createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess} from "./ListActions"
import { createMovieFailure } from "../movieContext/MovieActions";
export const getLists= async(dispatch)=>{
   dispatch(getListsStart());
try{
    const res=await axios.get("/lists",{headers:{
        token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
    }})
    
    dispatch(getListsSuccess(res.data))
}catch(e){
   dispatch(getListsFailure());
}
}



export const createList= async(list,dispatch)=>{
    dispatch(createListStart());
 try{
     const res=await axios.post("/lists",list,{headers:{
         token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
     }})
     
     dispatch(createListSuccess(res.data))
 }catch(e){
    dispatch(createMovieFailure());
 }
 }


export const deleteList= async(id,dispatch)=>{
    dispatch(deleteListStart());
 try{
     await axios.delete("/lists/"+id,{headers:{
         token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
     }})
     
     dispatch(deleteListSuccess(id))
 }catch(e){
    dispatch(deleteListFailure());
 }
 }