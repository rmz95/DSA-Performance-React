import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import ItemCart from "./ItemCart";
import { cartContext } from "../context/CartContext";


    const Cart = () => {

        const { qtyProducts, products, clear, total } = useContext(cartContext)

        return(
            <>
                {qtyProducts === 0
                ? 
                <div className="row gx-4 gx-lg-5 justify-content-center ms-0">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h1 className="mt-1">Tienda DSA</h1>
                        <hr className="divider"/>
                        <h2 className="text-muted mb-5">Aún no tienes Productos o Servicios en el Carrito, <Link to="/" className="text-black py-2">Click aqui para Comprar</Link></h2>
                    </div>
                </div> 
                :  (
                    <div className="row gx-4 gx-lg-5 justify-content-center ms-0">
                        <div className="col-lg-8 col-xl-6 text-center">
                            <h1 className="mt-1">Tienda DSA</h1>
                            <hr className="divider"/>
                            <h3 className="text-muted mb-5">INFORMACION IMPORTANTE</h3>
                            <p className="text-muted mb-5">Los medios de pagos con los que trabajamos son mediante Mercado Pago, Transferencia Bancaria o Efectivo. Les recordamos que todos los trabajos realizados con Amortiguadores COMPLETOS o Espirales, tienen una garantia de 6 MESES.</p>
                            <hr className="divider"/>
                        <div className="table-responsive my-5 table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
                            <table className="align-middle mx-0 py-2 table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-4">ID</th>
                                        <th scope="col" className="px-4">Nombre</th>
                                        <th scope="col" className="px-4">Precio</th>
                                        <th scope="col" className="px-4">Cantidad</th>
                                        <th scope="col" className="px-4">
                                            <button onClick={() => clear()} className="btn btn-primary">Limpiar</button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="my-2 table-group-divider">
                                    {products.map(product => <ItemCart key={product.id} product={product}/>)}
                                </tbody>
                                <tfoot className="py-2">
                                    <tr>
                                        <td>Total</td>
                                        <td colSpan="3" className="align-middle"><p className="text-center my-0 mx-1">${total}</p></td>
                                        <td>
                                        <Link to="/CartFinish">
                                        <button className="btn btn-success">Finalizar compra</button>
                                        </Link>
                                        </td>
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