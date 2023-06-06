import React from 'react'
import './new.scss'
import Sidebar from '../Components/sidebar/Sidebar'
import {useNavigate} from "react-router-dom";
import Navbar from '../Components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewProduct = () => {
    const navigate = useNavigate();

    const [file, setFile] = useState("");
    let name,value;
    const [product, setProduct] = useState({
        title:"", description:"", category:"", price:"", stock :""
    });

    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setProduct({...product, [name]:value})
    }

    const PostData = async(e) =>{
        e.preventDefault();
        const {title, description, category, price, stock} = product;
   
        const res = await fetch("/admin/products/new",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          title:title, description:description, category:category, price:price, stock:stock
        })
        
      });
      
      const data = await res.json();
      if(res.status===422 || !data){
        window.alert("Invalid Products");
        console.log("Invalid Products")
      }
      else{
        window.alert("Product Submission Successfull");
        console.log("Product Submission Successfull");
        navigate("/admin");
      }
    
    };

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>

          <div className="right">
            
            <form method='POST'>
                <div className="formInput">
                  <label htmlFor='file'>
                    Image:<DriveFolderUploadOutlinedIcon className='icon'/>
                  </label>
                  <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
                </div>

                
                <div className="formInput">
                  <label>Title</label>
                  <input type="text" placeholder='Apple Macbook Pro' name="title" id="title" autoComplete='off' value={product.title}  onChange={handleInputs} />
                </div>
                
                <div className="formInput">
                  <label>Description</label>
                  <input type="email" placeholder='Description' name="description" id="description" autoComplete='off' value={product.description}  onChange={handleInputs} />
                </div>
                
                <div className="formInput">
                  <label>Category</label>
                  <input type="text" placeholder='Computers' name="category" id="category" autoComplete='off' value={product.category}  onChange={handleInputs}/>
                </div>
              
                
                <div className="formInput">
                  <label>Price</label>
                  <input type="text" placeholder='100' name="price" id="price" autoComplete='off' value={product.price}  onChange={handleInputs} />
                </div>
                
                <div className="formInput">
                  <label>Stock</label>
                  <input type="text" placeholder='in stock' name="stock" id="stock" autoComplete='off' value={product.stock}  onChange={handleInputs}/>
                </div> 
                
                                        
                <input type="submit" name='send' id='send' value={"Send"} className="button"
                            onClick={PostData}
                            /> 


            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProduct