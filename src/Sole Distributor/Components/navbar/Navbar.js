import React from 'react'
import "../navbar/Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";

function Navbar() {
    const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
          <LanguageOutlinedIcon className='icon'/>
          English
          </div>
          <div className="item">
          <DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
          <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          <div className="item">
          <ShoppingCartIcon className='icon'/>
          <div className="counter">1</div>
          </div>

          <div className="item">
          <ListOutlinedIcon className='icon'/>
          </div>
          <div className="item">
          <img src="https://zoomstudio.com.au/wp-content/uploads/jonathan-Simpson-5.jpg.webp" alt="" className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
