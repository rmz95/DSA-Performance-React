import { useState, useContext } from "react";
import { cartContext } from '../context/CartContext';
import { db } from '../../firebase/firebase';
import {addDoc, collection, serverTimestamp, getDocs, query, orderBy, limit} from 'firebase/firestore';
import { Link } from "react-router-dom";


const CartFinish = ()=>  {
    const {products, qtyProducts, clear, total} = useContext(cartContext);

    const formulario = {
        name:'',
        email:'',
        phone:'',
        payment:''
    }
    const [orderId, setOrderId] = useState(null);

    const [data, setData] = useState(formulario)

    const getData = (e)=> {
        const {name, value} = e.target;
        setData({...data, [name]:value})}

    const saveData = async(e)=>{
        e.preventDefault();
        try {
            await addDoc (collection(db,'ventas'),{
                ...data, 
                items: products,
                date: serverTimestamp(),
                cantidad: qtyProducts,
                total: total,
            })

            const q = query(collection(db, "ventas"), orderBy("date", "desc"), limit(1));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            setOrderId(doc.id);
            });

            
            clear();

        } catch (error) {
            console.log(error);
        }

        setData({...formulario})
    }
    

if (orderId){
    return(
        <>
        <div className="container py-5 text-center">
            <h2>¡Gracias por elegirnos!</h2>
            <h4 className="my-5">La compra se ha realizado exitosamente.</h4>
            <p className="text-muted mb-5">En la proximas 24 a 48 horas, te contactaremos para coordinar dia y horario para que traigas tu auto a nuestro taller.</p>
            <hr className="divider" />
            <strong>El numero de tu orden es {orderId}</strong>
            <hr className="divider" />
            <Link className="btn btn-outline-primary m-3" to={`/`}>
            Volver al Inicio
            </Link>
        </div>
        </>)}

    return (
        <>
        <div className="row gx-4 gx-lg-5 justify-content-center ms-0">
            <div className="col-lg-8 col-xl-6 text-center">
                <h1 className="mt-1">Tienda DSA</h1>
                <hr className="divider"/>
                <h2 className="text-muted mb-5">Formulario de Compra</h2>
            </div>
        <form onSubmit={saveData} className="d-grid justify-content-center">
            <div className="my-3">
            <input name="name" className="form-control"
            placeholder="Ingrese su Nombre"
            type="text" onChange={getData} value={data.formName} required/>
            </div>
            <div className="my-3">
            <input name= "email" className="form-control"
            placeholder="Ingrese su Email"
            type="email" onChange={getData} value={data.formEmail} required/>
            </div>
            <div className="my-3">
            <input name="phone" className="form-control"
            placeholder="Telefono de contacto"
            type="phone" onChange={getData} value={data.formPhone} required/>
            </div>
            <div className="my-3">
            <h5 className="text-muted text-center">Metodo de Pago</h5>
                <select name="payment" className="form-select"
                placeholder="Metodo de Pago"
                onChange={getData} value={data.formPayment} required>
                <option value="Efectivo">Efectivo</option>
                <option value="Mercado Pago">Mercado Pago</option>
                <option value="Transferencia Bancaria">Transferencia Bancaria</option>
                </select>
            </div>
            <div className="my-3 d-grid gap-2">
            <button className='form-submit btn btn-secondary'>Enviar Compra</button>
            </div>
        </form>
        </div>
    </>
    )

}


export default CartFinish