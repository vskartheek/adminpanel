import React, { useState } from 'react'
import "./userList.css"
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import {userRows} from '../../dummyData';
import { Link } from 'react-router-dom';
const UserList = () => {
  const [data,setData]=useState(userRows);

  const handleDelete=(id)=>{
    setData(data.filter((item) => item.id !== id));
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'user', headerName: 'User', width: 200, renderCell:(params)=>{
      return(
        <div  className='userListUser'>
          <img className='userListImg' src={params.row.avatar} alt=""/>
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 180 },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 150,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
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
            <Link to={"/user/"+params.row.id}>
            <button className="userListEdit">Edit</button>

            </Link>
            <DeleteOutline className="userListDelete"  onClick={()=>handleDelete(params.row.id)}/>
            </>
          )
        }

    }
  
  ];
  

  return (
    <div className='userList'>
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

export default UserList