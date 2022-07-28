import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import ItemCart from "./ItemCart";
import { cartContext } from "../context/CartContext";


    const Cart = () => {

        const { qtyProducts, products, clear } = useContext(cartContext)

        return(
            <>
                {qtyProducts === 0
                ? 
                <div className="row gx-4 gx-lg-5 justify-content-center ms-0">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h1 className="mt-0">Tienda DSA</h1>
                        <hr className="divider"/>
                        <h2 className="text-muted mb-5">Aún no tienes Productos o Servicios en el Carrito, <Link to="/" className="text-black py-2">Click aqui para Comprar</Link></h2>
                    </div>
                </div> 
                :  (
                    <div className="row gx-4 gx-lg-5 justify-content-center ms-0">
                        <div className="col-lg-8 col-xl-6 text-center">
                            <h1 className="mt-0">Tienda DSA</h1>
                            <hr className="divider"/>
                        <div className="table-responsive">
                            <table className="align-middle mx-0">
                                <thead className="py-3">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">
                                            <button onClick={() => clear()} className="btn btn-primary">Limpiar</button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => <ItemCart key={product.id} product={product}/>)}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="2">Total</td>
                                        <td className="align-middle"><p className="my-0 ">${products.reduce((acc, el) => acc + (el.qty * el.price), 0)}</p></td>
                                        <td></td>
                                        <Link to="/CartFinish">
                                        <button className="btn btn-success">Finalizar compra</button>
                                        </Link>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>)}
            </>
        );
    };

export default Cart