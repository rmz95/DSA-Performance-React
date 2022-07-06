import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

    const ItemDetailContainer = ({ greeting }) => {
    const [product, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { id } = useParams();

    useEffect(() => {

        const getitems = async () => {
            try {
                setProducts();
            }
            catch {
                setError(true);
            }
            finally {
                setLoading(false);
            };
        };
    getitems();
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
