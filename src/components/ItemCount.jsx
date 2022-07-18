import React, { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {

    const [contador, setContador] = useState(initial)

    const suma = () => {
        contador < stock && setContador(contador + 1)
        contador >= stock && alert('No hay stock para este producto o servicio')
    }

    const resta = () => {
        setContador(Math.max(contador - 1, 0))
    }

    const agregado = () => {
        if(contador > 0) onAdd(contador);
    }

return (
    <>
        <div className="my-2 text-center">
            <button className="btn btn-outline-secondary" onClick={resta}>-</button>
            <span className="mx-2 fs-5">{contador}</span>
            <button className="btn btn-outline-secondary" onClick={suma}>+</button>
            <button className="btn btn-primary mx-2" onClick={agregado}>Agregar al Carrito</button>
        </div>
    </>
)}

export default ItemCount