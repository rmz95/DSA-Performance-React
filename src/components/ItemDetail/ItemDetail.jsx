import React, { useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ product }) => {
const [finalized, setFinalized] = useState(false);

const onAdd = (contador) => {
    console.log(`Se agregaran ${contador} productos al carrito`);
    setFinalized(true);
};

return (
    <div>
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <span>${product.price}</span>
        <p>{product.description}</p>
        {!finalized ? (
        <ItemCount onAdd={onAdd} stock={product.stock} initial={1} />
    ) : (
        <Link to="/cart">
            <button>Finalizar compra</button>
        </Link>
    )}
    </div>
    );
};


