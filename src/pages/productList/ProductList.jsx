import React,{useState} from 'react'
import './productList.css'
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import {productRows} from '../../dummyData';
import { Link } from 'react-router-dom';
function ProductList() {
    const[data,setData]=useState(productRows)
    const handleDelete=(id)=>{
        setData(data.filter((item) => item.id !== id));
      }

      const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        { field: 'product', headerName: 'Product', width: 200, renderCell:(params)=>{
          return(
            <div  className='productListItem'>
              <img className='productListImg' src={params.row.img} alt=""/>
              {params.row.name}
            </div>
          )
        } },
        { field: 'stock', headerName: 'Stock', width: 180 },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 150,
        },
        {
          field: 'price',
          headerName: 'Price',
          type: 'number',
          width: 180,
        },
    
        {
            field:"action",
            headerName: 'Action',
            width: 150,
            renderCell:(params)=>{
              return(
                <>
                <Link to={"/products/"+params.row.id}>
                <button className="productListEdit">Edit</button>
    
                </Link>
                <DeleteOutline className="productListDelete"  onClick={()=>handleDelete(params.row.id)}/>
                </>
              )
            }
    
        }
      
      ];
      
  return (
    <div className='productList'>
        <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList