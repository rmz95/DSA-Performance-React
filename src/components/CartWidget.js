import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { red } from '@mui/material/colors';
import { cartContext } from './context/CartContext';


    const CartWidget = () => {

        const { qtyProducts } = useContext(cartContext);

    return (
        <button className="btn btn-secondary d-md-flex justify-content-md-center">
    <ShoppingCartIcon sx={{ color: red[500], fontSize: 25, marginRight: 1 }} />
    {qtyProducts >= 1 ?
    <p className='my-0'>{qtyProducts}</p> : (false)}
        </button>
    )
}

export default CartWidget