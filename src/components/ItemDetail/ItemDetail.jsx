import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext"

export const ItemDetail = ({ product }) => {
const [finalized, setFinalized] = useState(false);
const { addProduct } = useContext(cartContext);

const onAdd = (contador) => {
    addProduct({...product, qty: contador});
    setFinalized(true);
};

return (
    <div className="row gx-4 gx-lg-5 justify-content-center ms-0">
    <div className="col-lg-8 col-xl-6 text-center pt-1">
            <h1 className="mt-0">Tienda DSA</h1>
            <hr className="divider"/>
        <img src={product.url} alt={product.name} />
        <h2>{product.name}</h2>
        <img src={product.url2} alt={product.name} className="img-fluid img-thumbnail"/>
        <p className="fs-4 bold">${product.price}</p>
        <p>{product.description}</p>
        {!finalized ? (
        <ItemCount onAdd={onAdd} stock={product.stock} initial={0} />
    ) : (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center py-3">
                <Link to="/cart" className="">
                    <button className="btn btn-success">Finalizar compra</button>
                </Link>
                <Link to="/" className="">
                    <button className="btn btn-dark">Seguir comprando</button>
                </Link>
            </div>
        </>
    )}
    </div>
    </div>
    );
};