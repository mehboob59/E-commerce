import React,{useContext} from "react";
import { CartContext } from "../Global/CartContext";
import {ProductsContext} from '../Global/ProductContext'
import Banner from "./Banner";

const Products =  ()=>{
    const {products} = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext)
    return(
        <div className="container">
            <Banner/>
        <div className="products">
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <div className="product-image">
                        <img src={product.image} alt="not found"/>
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            {product.name}
                        </div>
                        <div className="product-price">
                            ${product.price}.00
                        </div>
                    </div>
                   
                    <div className="add-to-cart" onClick={() => dispatch({type: 'ADD-TO-CART', id: product.id, product})}>Add to cart</div>
                    {product.status === 'hot' ? <div className="hot">Hot</div> :''}
                    {product.status === 'new' ? <div className="new">New</div> :''}
                </div>
            ))}
        </div>
        </div>
    )
}
export default Products;  