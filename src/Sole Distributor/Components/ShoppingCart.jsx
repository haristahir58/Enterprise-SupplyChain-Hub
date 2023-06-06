    import React from 'react';
    import { Card, CardContent, Typography, Button } from '@mui/material';

    const ShoppingCart = ({ cartItems, removeFromCart }) => {
    return (
        <div>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
            <p>No items in the cart.</p>
        ) : (
            cartItems.map((item) => (
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
                <Button
                    variant="contained"
                    color="secondary"
                    className="removeFromCartButton"
                    onClick={() => removeFromCart(item)}
                >
                    Remove from Cart
                </Button>
                </CardContent>
            </Card>
            ))
        )}
        </div>
    );
    };

    export default ShoppingCart;
