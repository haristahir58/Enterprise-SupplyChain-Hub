import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Navbar from '../../../Sole Distributor/Components/navbar/Navbar';
import Sidebar from '../../../Sole Distributor/Components/Sidebar/SoleSidebar';
import './soleProduct.scss';

const SoleProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch('/admin/products');
    result = await result.json();
    setProducts(result);
  };

  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />

          <div className="cardContainer1">
            {products.map((item) => (
              <Card key={item._id} className="card1">
                <CardContent>
                  <Typography variant="h6" component="div" className="cardTitle1">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="cardText">
                    {item.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="cardText">
                    Category: {item.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="cardText">
                    Price: {item.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="cardText">
                    Stock: {item.stock}
                  </Typography>
                  <div className='btn5'>
                  <Button variant="contained" color="primary" className="addToCartButton">
                    Add to Cart
                  </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SoleProduct;
