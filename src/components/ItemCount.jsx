import React, { useState } from "react";

const ItemCount = ({ stock, initial = 0 }) => {

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
        <div class="my-2 text-center">
            <button class="btn btn-outline-secondary" onClick={resta}>-</button>
            <span class="mx-2 fs-5">{contador}</span>
            <button class="btn btn-outline-secondary" onClick={suma}>+</button>
            <button class="btn btn-primary mx-2" onClick={onAdd}>Comprar</button>
        </div>
    </>
)}

export default ItemCount