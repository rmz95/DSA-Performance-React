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
const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

const { id } = useParams();

    useEffect(() => {
        promise.then((data) => {
            const getData = data[id]
            setProduct(getData)
            setLoading(false)
        }).catch(() => {
            console.log('error')
        })
    }, [id]);
    console.log(product)
    
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
