import React,{ createContext, useState } from "react";

import dslr from '../photos/dslr.jpg'
import headphone from '../photos/headphone.jpg'
import phone from '../photos/phone.jpg'
import watch from '../photos/watch.jpg'
import perfume from '../photos/perfume.jpg'
import makeup from '../photos/makeup.jpg'
import ring from '../photos/ring.jpg'
import shoes from '../photos/shoes.jpg'


export const ProductsContext = createContext();

const ProductsContextProvider = (props)=>{

    const [products] = useState([
        {id: 1, name: 'Dslr', price: 300, image: dslr, status: 'hot'},
        {id: 2, name: 'Headphone', price: 30, image: headphone, status: 'new'},
        {id: 3, name: 'I phone', price: 400, image: phone, status: 'hot'},
        {id: 4, name: 'Watch', price: 120, image: watch, status: 'hot'},
        {id: 5, name: 'Perfume', price: 50, image: perfume, status: 'hot'},
        {id: 6, name: 'Makeup', price: 100, image: makeup, status: 'new'},
        {id: 7, name: 'Ring', price: 70, image: ring, status: 'hot'},
        {id: 8, name: 'Shoes', price: 80, image: shoes, status: 'new'}
    ]);

    return(
        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    )

}

export default ProductsContextProvider;