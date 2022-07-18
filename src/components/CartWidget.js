import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { red } from '@mui/material/colors';
import { cartContext } from './context/CartContext';


    const CartWidget = () => {

        const { qtyProducts } = useContext(cartContext);

    return (
        <button className="btn btn-secondary ms-3 px-1">
    <ShoppingCartIcon sx={{ color: red[500], fontSize: 25, marginLeft: 1, marginRight: 1 }} />
    <p>{qtyProducts}</p>
        </button>
    )
}

export default CartWidget