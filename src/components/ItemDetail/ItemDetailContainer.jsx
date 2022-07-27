import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";



const ItemDetailContainer = ({ greeting }) => {
const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

const { id } = useParams();

    useEffect(() => {

    const productsCollection = collection(db, "productos");
    const refDoc = doc(productsCollection, id)
    getDoc(refDoc).then(result => {
        setProduct({
            id: result.id,
            ...result.data(),
        })
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
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
