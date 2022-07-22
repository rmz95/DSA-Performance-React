import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({  product }) => {

    return (
        <div className="col-sm-3 px-4 py-5">
            <div className="card text-center">
                <div className="card-img-top pt-3">
                    <img src={product.url} alt={product.name} />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-text fs-3">${product.price}</p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                        <Link to={`/categories/${product.type}/${product.id}`}>
                            <button className="btn btn-dark mx-5">Ver detalles del {product.type}</button>
                        </Link>
                    </div>
                </div>
                <div className="card-footer bg-transparent border-dark">
                {/* <Link onClick={product.id} to={`/categories/${product.type}/${product.id}`} className="d-block"><button className="btn btn-dark mx-5">Ver detalles del {product.type}</button></Link> */}
                <p className="my-1">Stock disponible : {product.stock}</p>
                </div>
            </div>
        </div>
    );
};

export default Item
