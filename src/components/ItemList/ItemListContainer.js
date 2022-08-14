import React, { useEffect, useState } from "react";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";
import  ItemList from './ItemList';
import { useParams } from "react-router-dom";
import  BarLoader  from "react-spinners/BarLoader";
import { db } from "../../firebase/firebase";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { type } = useParams();

        useEffect(() => {
            
            const q = type
            ? query(collection(db, 'productos'), where('type', '==', type))
            : query(collection(db, 'productos'), orderBy('type', 'asc'));

        getDocs(q)
            .then(result => {
                const list = result.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                setProducts(list);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        },[type]);

    return(
        <>
        <div className="row gx-4 gx-lg-5 justify-content-center ms-0">
            <div className="col-lg-8 col-xl-6 text-center">
                <h1 className="mt-0">Tienda DSA</h1>
                <hr className="divider"/>
                <p className="text-muted mb-5">En esta seccion podrás comprar nuestros productos y servicios. Los precios de nuestros productos ya tienen incorporados la mano de obra.</p>
            </div>
        </div>
        {loading ? (
            <div className="d-flex justify-content-center align-items-center py-3">
                <BarLoader color={"#ee1d23"} loading={loading} size={150} width={'40%'} />
            </div>
        ) : (
        <div className="row my-1">
            <ItemList products={products} />
        </div>
        )}
    </>

    );
};

export default ItemListContainer