import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {CiSearch} from "react-icons/ci";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { icons } from '../../constants';
import './ListTable.scss'

const ListTable = () => {
  const columns = [
    { 
    field: 'buyerDetails', 
    headerName: 'Buyer email and image',
    width: 280, 
    renderCell: (params)=> {
    return(
      <div className="cell-wth-img">
        <img src={params.row.img} alt="av" className='cell-img'/>
        {params.row.email}
      </div>
          )
        } 
   },
    { field: 'phoneNumber', headerName:'Phone number', width: 120, type: 'number' },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 70,
      renderCell: ()=> {
        return (
          <div className="actns-cell">
            <img src={icons.more} alt="" className='actns-icon' aria-describedby={id} variant="contained" onClick={handleClick}/>
            <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2, display:'flex', flexDirection: 'column'}}>
          <a href='/' className='view-lnk'>view</a>
           <a href="/" className='dlt-lnk'>delete</a>
        </Typography>
      </Popover>
          </div>
        )
      }
    }
  
  ];
  
  const rows = [
    { id: 1, email: 'Snow123@gmail.com', img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", phoneNumber: '078964521' },
    { id: 2, email: 'Snow123@gmail.com', img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", phoneNumber: '078964521' },
    { id: 3, email: 'Snow123@gmail.com', img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", phoneNumber: '078964521' },
    { id: 4, email: 'Snow123@gmail.com', img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", phoneNumber: '078964521' },

  ];

  const data = rows;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className='list-tbl'>
      <div className="header flex-row">
        <h3>List of Buyers</h3>

        <div className="search-container flex-row">
          <CiSearch className="search-icon"/>
          <input type="search" placeholder="search by shop name"/>
        </div>
      </div>
      <div style={{ height: 400, width: '100%', color: 'rgba(255, 255, 255, 0.8)' }}>
     
        
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          
        />
      </div>
    </div>
  )
}

export default ListTable