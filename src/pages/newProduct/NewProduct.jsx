import { useContext, useState } from "react";
import "./newProduct.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase";
import { createMovie } from "../../context/movieContext/movieApiCalls";
import {MovieContext} from "../../context/movieContext/MovieContext";
export default function NewProduct() {
  const [movie,setMovie]=useState(null);
  const [img,setImg]=useState(null);
  const [imgTitle,setImgTitle]=useState(null);
  const [imgSm,setImgSm]=useState(null);
  const [trailer,setTrailer]=useState(null);
  const [video,setVideo]=useState(null);
  const [uploaded,setUploaded]=useState(0);
  const {dispatch}=useContext(MovieContext);
  const handleChange=(e)=>{
    const value=e.target.value;
    setMovie({...movie,[e.target.name]:value})
  };
  const upload=(items)=>{
    items.forEach(item=>{
        const fileName=new Date().getTime()+item.label+item.file.name;
        const storageRef = ref(storage, `items/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, item.file);
        uploadTask.on("state_changed", snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`upload is ${progress}% done`);
        }, err => { console.log(`upload error: ${err}`) }, () => {
          getDownloadURL(uploadTask.snapshot.ref).then(url => {
            setMovie(prev => { return { ...prev, [item.label]: url } })
          });
          setUploaded(prev => prev + 1)
        });
    });
  }

const handleUpload=(e)=>{
  e.preventDefault();
  upload([
    {file:img,label:"img"},
    {file:imgTitle,label:"imgTitle"},
    {file:imgSm,label:"imgSm"},
    {file:trailer,label:"trialer"},
    {file:video,label:"video"},
  ])
}

const handleSubmit=(e)=>{
  e.preventDefault();
  createMovie(movie,dispatch)

}
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img" name="img" onChange={e=>setImg(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="file" id="imgTitle" name="imgTitle"
          onChange={e=>setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Thubnail image</label>
          <input type="file" id="imgSm" name="imgSm"
          onChange={e=>setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="john wick" name="title" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>description</label>
          <input type="text" placeholder="description" name="desc" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="year" name="year" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="genre" name="genre" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Duriation</label>
          <input type="text" placeholder="duriation" name="duriation" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>limit</label>
          <input type="text" placeholder="limit" name="limit" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" name="trailer"
          onChange={e=>setTrailer(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" name="video"
          onChange={e=>setVideo(e.target.files[0])}
          />
        </div>{uploaded===5?(
          <button className="addProductButton" onClick={handleSubmit}>Create</button>
        ):( <button className="addProductButton" onClick={handleUpload}>Upload</button>
        )}
      </form>
    </div>
  );
}