import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link onClick={product.id} to={`/categories/${product.type}/${product.id}`}><button class="btn btn-dark mx-5">Ver detalles del {product.type}</button></Link>
                <p class="my-1">Stock disponible : {product.stock}</p>
            </div>
        </div>
    );
};

export default Item
