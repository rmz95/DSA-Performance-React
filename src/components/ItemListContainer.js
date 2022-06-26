import React from "react";
import ItemCount from './ItemCount';

    const ItemListContainer = ({ cheers }) => {

    const onAdd = () => {
        alert(`Gracias por tu compra`)
    }


    return(
        <>
        <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-8 col-xl-6 text-center">
            <h1 class="mt-0">Tienda DSA</h1>
            <hr class="divider"/>
            <p class="text-muted mb-5">En esta seccion podrás comprar nuestros productos y servicios. Los precios de nuestros productos ya tienen incorporados la mano de obra.</p>
        </div>
    </div>
        <div class="text-center">
            <h1>{cheers}Producto</h1>
            <ItemCount stock={5} onAdd={onAdd} />
        </div>
    </>

    )
}

export default ItemListContainer