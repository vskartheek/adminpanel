import React from 'react'
import './product.css'
import { Link,useLocation } from 'react-router-dom'
import { Publish } from '@mui/icons-material'
function Product() {
  const location = useLocation();
  const movie = location.state ? location.state.movie : {};
  console.log(movie);
  return (
    <div className='product'>
    <div className="productTitleContainer">
            <h1 className="productTitle">Movie</h1>
            <Link to='/newproduct'>
            <button className="productAddButton">Create</button>
            </Link>
        </div>       
        <div className="productTop">
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={movie.img} alt="" className="productInfoImg" />
                <span className="productName">{movie.title}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id: </span>
                  <span className="productInfoValue">{movie._id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">genre </span>
                  <span className="productInfoValue">{movie.genre}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">year</span>
                  <span className="productInfoValue">{movie.year}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">limit</span>
                  <span className="productInfoValue">{movie.limit}</span>
                </div>
          
              </div>
            </div>
        </div>
        <div className="productBottom">
          <form  className="productForm">
              <div className="productFormLeft">
                <label >Movie Title</label>
                <input type="text" placeholder={movie.title} />
                <label >year</label>
                <input type="text" placeholder={movie.year} />
                <label >genre</label>
                <input type="text" placeholder={movie.genre} />
                <label >limit</label>
                <input type="text" placeholder={movie.limit} />
                <label >trailer</label>
                <input type="file" placeholder={movie.trailer} />
                <label >video</label>
                <input type="file" placeholder={movie.video} />
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img src={movie.img} alt="" className="productUploadImg" />
                <label for="file">
                  <Publish/>
                </label>
                <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <button className="productButton">Update</button>
              </div>

          </form>
        </div>
    

    </div>
  )
}

export default Product