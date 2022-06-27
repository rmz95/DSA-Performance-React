import React, { useState } from "react";

const ItemCount = ({ stock, initial = 1 }) => {

    const [contador, setContador] = useState(initial)

    const suma = () => {
        contador < stock && setContador(contador + 1)
        contador >= stock && alert('No hay stock para este producto o servicio')
    }

    const resta = () => {
        setContador(Math.max(contador - 1, 0))
    }

    const onAdd = () => {
        contador >= 1 && alert(`Gracias por tu compra de ${contador}`)
        contador <= 0 && alert('No es posible la compra, debe asignar una unidad') 
    }

return (
    <>
        <div class="my-2">
            <button onClick={resta}>-</button>
            <p>{contador}</p>
            <button onClick={suma}>+</button>
        </div>
        <button class="btn btn-primary" onClick={onAdd}>Comprar</button>
    </>
)}

export default ItemCount