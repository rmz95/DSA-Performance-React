import React from 'react';


export const ItemDetail = ({ product }) => {

    return (
        <div>
            <img src={product.img} alt={product.name} />
            <h1>{product.name}</h1>
            <span>${product.price}</span>
            <p>{product.type}</p>
        </div>
    )

}


