import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { red } from '@mui/material/colors';


    const CartWidget = () => {

    return (
        <button class="btn btn-secondary ms-3 px-1">
    <ShoppingCartIcon sx={{ color: red[500], fontSize: 25, marginLeft: 1, marginRight: 1 }} />
        </button>
    )
}

export default CartWidget