import React, { useState,useEffect } from 'react';
import { Link} from "react-router-dom";
import "../table/table.scss";
import "../datatable/productList.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import ProductUpdate from '../../new/ProductUpdate'
import {useNavigate} from "react-router-dom";



const ProductList = () => {

  const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async () => {
        let result = await fetch('/admin/products')
        result = await result.json();
        setProducts(result);
    }
    
    const deleteProduct = async (id) => {
      let result = await fetch(`/admin/products/${id}`, {
        method: "Delete",
      });
    
      if (result.status === 200) {
        alert("Product is Deleted");
        navigate("/admin");
      } else {
        console.log("Error deleting Product");
      }
    };




  return (
    <>


<div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>

      <div className="productTableTitle">
            Products
            <Link to="/admin/products/new" style={{textDecoration:"none"}} className="newLink">
            Add New Products
            </Link>
          </div>
          <div className="tableContainer">
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Product ID</TableCell>
              <TableCell className="tableCell">Title</TableCell>
              <TableCell className="tableCell">Description</TableCell>
              <TableCell className="tableCell">Category</TableCell>
              <TableCell className="tableCell">Price</TableCell>
              <TableCell className="tableCell">Stock</TableCell>
              <TableCell className="tableCell">Operations</TableCell>
            </TableRow>
          </TableHead>

          {
         products.map((item, index) => (
            <TableBody>
            <TableRow key={item._id}>
            <TableCell className="tableCell">{index}</TableCell>
            <TableCell className="tableCell">{item.title}</TableCell>
            <TableCell className="tableCell">{item.description}</TableCell>
            <TableCell className="tableCell">{item.category}</TableCell>
            <TableCell className="tableCell">{item.price}</TableCell>
            <TableCell className="tableCell">{item.stock}</TableCell>
            <TableCell className="tableCell"><div className="deleteButton" onClick={()=>deleteProduct(item._id)}>Delete</div>
            <Link to={`/admin/products/${item._id}`} className="buttonLink">Update</Link></TableCell>
      </TableRow>
    </TableBody>
  ))
}

        </Table>
      </TableContainer>
      </div>
      


    </div>
  </div>

    
      </>
  )
}

export default ProductList