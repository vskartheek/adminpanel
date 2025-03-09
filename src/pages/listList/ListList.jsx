import React,{useContext, useEffect, useState} from 'react'
import './listList.css'
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';  
import { MovieContext } from '../../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../../context/movieContext/movieApiCalls';
import { ListContext } from '../../context/listContext/ListContext';
import { deleteList, getLists } from '../../context/listContext/listApiCalls';
function ListList() {
    const {lists, dispatch} = useContext(ListContext);
    useEffect(()=>{
      getLists(dispatch) 
    },[dispatch])
    const handleDelete=(id)=>{
      deleteList(id,dispatch)
      }

      const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'genre', headerName: 'Genre', width: 150 },
        { field: 'type', headerName: 'type', width: 150 },
        {
            field:"action",
            headerName: 'Action',
            width: 150,
            renderCell:(params)=>{
              console.log(params.row)
                return(
                <>
                <Link to={`/lists/${params.row._id}`} state={{ list: params.row }}>
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
        rows={lists}
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

export default ListList