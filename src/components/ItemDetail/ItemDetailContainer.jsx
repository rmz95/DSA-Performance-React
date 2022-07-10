import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { InitialProducts } from '../../data/InitialProducts';

const promise = new Promise ((res, rej) => {
    setTimeout(() => {
        res(InitialProducts);
    }, 2000);
});

    const ItemDetailContainer = ({ greeting }) => {
    const [product, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        fetch('../../data/InitialProducts.js')
            promise
            .then(res=>res.json())
            .then(data=>setProducts(data))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
    }, [id]);
    
    return(
        <>
        {loading ? (
            <div>
                <BarLoader color={"#ee1d23"} loading={loading} size={150} />
            </div>
        ): error ? (
            <h2>Lo sentimos, hubo un error</h2>
        ) : (
            <ItemDetail product={product} />
        )}
        </>
    );
};

export default ItemDetailContainer
