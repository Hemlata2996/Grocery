import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen(props) {
    return <ul className="products"> 
    {
      data.products.map(product => 
        <li>
        <div className="product">
            <Link to={'/products/' + product._id}>{
             <img className="product-image" src={product.image} alt="product" />

            }</Link>
            <div className="product-name">
            <Link to={'/product/' + product._id}>{product.name}</Link>
            <div className="product-brand">{product.brand}</div>
        
          </div>
          <span className="product-price">${product.price}</span>
          <span className="product-rating">{product.rating} stars</span>
         
        
        </div>
      </li>
        )
    }  </ul>
}

export default HomeScreen;