import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import {productData} from '../../dummyData'
import { Publish } from '@mui/icons-material'
function Product() {
  return (
    <div className='product'>
    <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to='/newproduct'>
            <button className="productAddButton">Create</button>
            </Link>
        </div>       
        <div className="productTop">
            <div className="productTopLeft">
              <Chart  data={productData} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src="https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg" alt="" className="productInfoImg" />
                <span className="productName">Apple Airpods</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id: </span>
                  <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">Sales: </span>
                  <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">Active: </span>
                  <span className="productInfoValue">yes</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">in stock: </span>
                  <span className="productInfoValue">no</span>
                </div>
          
              </div>
            </div>
        </div>
        <div className="productBottom">
          <form  className="productForm">
              <div className="productFormLeft">
                <label >Product Name</label>
                <input type="text" placeholder='Apple AirPod' />
                <label >In stock</label>
                <select name="inStock" id="idStock">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <label >Active</label>
                <select name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img src="https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg" alt="" className="productUploadImg" />
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