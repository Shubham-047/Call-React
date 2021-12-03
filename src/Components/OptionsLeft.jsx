import * as React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./optionLeft.module.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel"
];

const ITEM_HEIGHT = 48;

export default function LongMenu({ menu, current, id, handleLeftChange }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
 

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 

  const handleBlock = (option) => {
    setAnchorEl(null);
    handleLeftChange(option, id);
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
            width: "100px",
            fontSize:"20px",
          }}
        >
          {current} <span><ArrowDropDownIcon/></span>
        </div>
      </button>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleLeftChange}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch"
          }
        }}
      >
        {menu.map((option) => (
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
