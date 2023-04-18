import React from 'react'
import '../sidebar/sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";


const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext);

  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/admin" style={{textDecoration:"none"}}>
            <span className="logo">ESCH Admin</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/admin" style={{textDecoration:"none"}}>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/admin/users" style={{textDecoration:"none"}}>
                <li>
                    <PersonOutlineOutlinedIcon className="icon"/>
                    <span>Sole Distributors</span>
                </li>
                </Link>
                <Link to="/admin/products" style={{textDecoration:"none"}}>
                <li>
                <LocalMallIcon className="icon" />
                    <span>Products</span>
                </li>
                </Link>

                <li>
                <ShoppingCartIcon className="icon" />
                    <span>Orders</span>
                </li>

                <li>
                <LocalShippingIcon className="icon" />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                <BarChartIcon className="icon" />
                    <span>Stats</span>
                </li>

                <li>
                <NotificationsIcon className="icon" /> 
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                <SettingsEthernetIcon className="icon"/> 
                    <span>System Health</span>
                </li>

                <li>
                <AssignmentIcon className="icon"/>
                    <span>Logs</span>
                </li>

                <li>
                <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                <AccountCircleIcon className="icon"/>
                    <span>Profile</span>
                </li>

                <li>
                <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>

            </ul>
            </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar