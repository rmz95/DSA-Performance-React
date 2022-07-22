import React, { useContext } from "react";
import { cartContext } from "./context/CartContext";

const ItemCart = ({product}) => {

    const { deleteProduct } = useContext(cartContext)

    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.qty}</td>
            <td>
                <button onClick={() => deleteProduct(product.id)}>
                    X
                </button>
            </td>
        </tr>
    )
}

export default ItemCart