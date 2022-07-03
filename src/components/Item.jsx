import React from 'react';
import ItemCount from './ItemCount';

const Item = ({  product }) => {

    return (
        <div class="col-sm-3 px-4 py-5">
            <div class="card text-center">
                <div class="card-img-top my-1">
                    <img src={product.url} alt={product.name} />
                </div>
                <div class="card-body">
                    <h3 class="card-title">{product.name}</h3>
                    <p class="card-text fs-3">${product.price}</p>
                </div>
                <button class="btn btn-dark mx-5">Ver detalles del {product.type}</button>
                <p class="my-1">Stock disponible : {product.stock}</p>
                <ItemCount  stock={product.stock} />
            </div>
        </div>
    );
};

export default Item