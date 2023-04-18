import React from 'react'
import "./widget.scss"
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {

    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch(type){
        case "user":
            data={
                title:"DISTRIBUTORS",
                isMoney:false,
                link:"See all users",
                icon: <PersonOutlineOutlinedIcon className='icon'
                style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                  }}
                  />          
            };
            break;
            case "order":
                data={
                    title:"ORDERS",
                    isMoney:false,
                    link:"View all orders",
                    icon: <ShoppingCartOutlinedIcon className='icon'
                    style={{
                        backgroundColor: "rgba(218, 165, 32, 0.2)",
                        color: "goldenrod",
                      }}
                    />          
                };
                break;
            case "earnings":
                data={
                    title:"EARNINGS",
                    isMoney:false,
                    link:"View net earnings",
                    icon: <MonetizationOnOutlinedIcon className='icon'
                    style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}/>          
                };
                break;
            case "products":
                data={
                    title:"PRODUCTS",
                    isMoney:true,
                    link:"See details",
                    icon: <LocalMallIcon className='icon'
                    style={{
                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                        color: "purple",
                      }}/>          
                };
                break;
            default:
                break;
    }




  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney} {amount} </span>
            <span className="link">{data.link}</span>
            </div>

        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpRoundedIcon/>
                {diff} %
                </div>
        {data.icon}
            </div>

    </div>
  )
}

export default Widget