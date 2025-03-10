import React,{useContext, useEffect, useState} from 'react'
import './productList.css'
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import {productRows} from '../../dummyData';
import { Link } from 'react-router-dom';  
import { MovieContext } from '../../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../../context/movieContext/movieApiCalls';
function ProductList() {
    const {movies,dispatch}=useContext(MovieContext);
    useEffect(()=>{
      getMovies(dispatch) 
    },[dispatch])
    const handleDelete=(id)=>{
       // setData(data.filter((item) => item.id !== id));
       deleteMovie(id,dispatch)
      }
      //console.log(movies)

      const columns = [
        { field: '_id', headerName: 'ID', width: 120 },
        { field: 'movie', headerName: 'Movie', width: 200, renderCell:(params)=>{
          return(
            <div  className='productListItem'>
              <img className='productListImg' src={params.row.img} alt=""/>
              {params.row.title}
            </div>
          )
        } },
        { field: 'genre', headerName: 'Genre', width: 120 },
        { field: 'year', headerName: 'Year', width: 120 },
        { field: 'limit', headerName: 'Limit', width: 120 },
        { field: 'isSeries', headerName: 'isSeries', width: 120 },
        {
            field:"action",
            headerName: 'Action',
            width: 150,
            renderCell:(params)=>{
              console.log(params.row)
                return(
                <>
                <Link to={`/products/${params.row._id}`} state={{ movie: params.row }}>
                <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)} />
                </>
                )
            }
    
        }
      
      ];
      
  return (
    <div className='productList'>
        <DataGrid
        rows={movies}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  )
}

export default ProductList