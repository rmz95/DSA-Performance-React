import React, { useEffect, useState } from "react";
import  ItemList from './ItemList';
import { InitialProducts } from "../mock/InitialProducts.js";
import  BarLoader  from "react-spinners/BarLoader";

    const promise = new Promise ((res, rej) => {
        setTimeout(() => {
            res(InitialProducts);
        }, 2000);
    });


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

            useEffect(() => {
                promise
                    .then((products) => {
                        setProducts(products);
                    })
                    .catch((error) => {
                        console.error("error: ", error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }, []);

    return(
        <>
        <div class="row gx-4 gx-lg-5 justify-content-center ms-0">
        <div class="col-lg-8 col-xl-6 text-center">
            <h1 class="mt-0">Tienda DSA</h1>
            <hr class="divider"/>
            <p class="text-muted mb-5">En esta seccion podrás comprar nuestros productos y servicios. Los precios de nuestros productos ya tienen incorporados la mano de obra.</p>
        </div>
    </div>
        {loading ? (
            <div class="text-center">
                <BarLoader color={"#ee1d23"} loading={loading} size={150} />
            </div>
        ) : (
        <div class="row my-1">
            <ItemList products={products} />
        </div>
        )}
    </>

    );
};

export default ItemListContainer