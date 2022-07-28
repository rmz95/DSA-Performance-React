import React, { useContext, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { cartContext } from "../context/CartContext";

    const CartFinish = () => {
        const { products, qtyProducts } = useContext(cartContext);

        const [idVenta, setidVenta] = useState({
                nombre:'',
                telefono:'',
                email:'',
                notas:'',
            })
        

        const createidVenta = ({target}) => {
            setidVenta({
                ...idVenta,
                [target.name] : target.value
            })
        }

        const finishBuy = () => {
            const ventasCollection = collection(db, 'ventas');
            addDoc(ventasCollection,{
                idVenta,
                items: products,
                date: serverTimestamp(),
                cantidad: qtyProducts,
            })
            .then((result) => {
                setidVenta(result.id)
            })
        }
    

        return (
            <>
            <h3>Ingresa tus datos</h3>
            <form onSubmit={finishBuy}>
                <label>Nombre</label>
                <input onChange={createidVenta} type="text" name="nombre" className="form-control" required></input>
                <label>Telefono</label>
                <input onChange={createidVenta} type="number" name="telefono" className="form-control" required></input>
                <label>Email</label>
                <input onChange={createidVenta} type="email" name="email" className="form-control"></input>
                <label>Informacion Adicional</label>
                <input onChange={createidVenta} type="message" name="notas" className="form-control"></input>
                <submit onClick={finishBuy} className="btn btn-success" type="submit">
                    Enviar datos de compra
                </submit>
            </form>
            </>
        );
        }
export default CartFinish