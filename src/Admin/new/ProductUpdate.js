import React,{useEffect} from 'react'
import Navbar from '../Components/navbar/Navbar'
import Sidebar from '../Components/sidebar/Sidebar'
import {useNavigate} from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import "../new/new.scss"
import {useParams} from 'react-router-dom'

const ProductUpdate = () => {

    const navigate = useNavigate();

    const [file, setFile] = useState("");
    let name,value;
    const [product, setProduct] = useState({
        title:"", description:"", category:"", price:"", stock :""
    });
   
    const params = useParams();
    useEffect(()=>{
getProductDetails();
    },[])

    const getProductDetails = async()=>{
        console.log(params)
        let result = await fetch(`/admin/products/${params.id}`)
        result = await result.json();
        console.log(result)
        setProduct({
            ...product,
            title: result.title,
            description: result.description,
            category: result.category,
            price: result.price,
            stock: result.stock,
          });
       
    }


    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setProduct({...product, [name]:value})
    }

    const updateData = async(e) =>{
      e.preventDefault();
      const {title, description, category, price, stock} = product;
      console.log(product)
      let result = await fetch(`/admin/products/${params.id}`,{
          method:"Put",
          body: JSON.stringify({
              title:title, description:description, category:category, price:price, stock:stock
            }),
          headers:{
              'Content-Type': 'application/json'
          }
      });
      
      if(result.status === 200){
          window.alert("Product Updation Successfull");
          navigate("/admin");
      } else {
          console.log("Error updating product");
      }
  };

  return (
    <>
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Update Product</h1>
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
                
                                        
                <input type="submit" name='send' id='send' value={"Update"} className="button"
                            onClick={updateData}
                            /> 


            </form>

          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default ProductUpdate