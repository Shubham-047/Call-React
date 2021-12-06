import React,{useEffect,useState} from 'react'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdArrowDropDown } from "react-icons/md";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




const ITEM_HEIGHT = 48;
export default function OptionsRight({handleRightChange,optionRight,id,currentRight}) {
    const [anchorEl, setAnchorEl] = useState(null);
  

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 const closePopup=()=>{
  
 }
  const handleBlock = (option) => {
    setAnchorEl(null);
    handleRightChange(option, id);
  };
  return (
    <div>
      <button
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        
        <div
          style={{
            width: "150px",
            fontSize:"20px",
           border:"5px",
           display:"flex",
           justifyContent:"space-between"
          }}
          onClick={closePopup}
        >
          <span>{currentRight}</span><MdArrowDropDown style={{marginLeft:"10px"}}/>
        </div>
      </button>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleRightChange}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch"
          }
        }}
      >
        {optionRight.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={() => handleBlock(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
