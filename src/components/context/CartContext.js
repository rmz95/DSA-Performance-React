import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);

    const getProductsqty = () => {
        let qty = 0;
        products.forEach(product => {
            qty += product.qty;
        })
        setQtyProducts(qty);
        
    }

    useEffect(() => {
        getProductsqty();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    function addProduct(product) {
        if (IsinCart(product.id)) {
            const productFind = products.find(p => p.id === product.id);
            const index = products.indexOf(productFind);
            const aux = [...products];
            aux[index].qty += product.qty;
            setProducts(aux);

            // const aux = [...products];
            // const found = aux.find(p => p.id === products.id);
            // found.qty += products.qty;
            // setProducts(aux);
        } else {
            setProducts([...products, addProduct]);
        };
    }


    const deleteProduct = (id) => {
        setProducts(products.filter(products => products.id === id));
    };

    const IsinCart = (id) => {
        products.some(product => product.id === id)
    };

    const clear = () => {
        setProducts([]);
        setQtyProducts(0);
    }

    return (
        <Provider value= {{ products, addProduct, qtyProducts, deleteProduct, clear}}>
            {children}
        </Provider>
    );
};


export default CartCustomProvider

