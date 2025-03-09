import { useContext, useEffect, useState } from "react";
import "./newList.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase";
import { createMovie, getMovies } from "../../context/movieContext/movieApiCalls";
import {MovieContext} from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/listApiCalls";
import { useNavigate } from "react-router-dom";
export default function NewList() {
  const [list,setList]=useState(null);

  const {dispatch}=useContext(ListContext);
  const {movies,dispatch:dispatchMovie}=useContext(MovieContext);
  const navigate = useNavigate();
  useEffect(()=>{
    getMovies(dispatchMovie);
  },[dispatchMovie])
  const handleChange=(e)=>{
    const value=e.target.value;
    setList({...list,[e.target.name]:value})
  };


const handleSubmit=(e)=>{
  e.preventDefault();
  createList(list,dispatch)
  navigate("/lists")
}

const handleSelection=(e)=>{
  let value=Array.from(e.target.selectedOptions,(option)=>option.value);
  setList({...list,[e.target.name]:value})
}

console.log(list);
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formLeft">

        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="enter list name" name="title" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="genre" name="genre" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>type</label>
          <select name="type" id="type" onChange={handleChange}>
            <option>type</option>
            <option value="movie">movie</option>
            <option value="series">series</option>
          </select>
        </div>
        </div>
        <div className="formRight">

        <div className="addProductItem">
          <label>content</label>
          <select multiple name="content" id="content" onChange={handleSelection} style={{height:"300px"}}>
          {movies && movies.map(movie=>(
            <option key={movie._id} value={movie._id}>{movie.title}</option>
          ))}
          </select>
        </div>
      </div>
          <button className="addProductButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}