import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './product.module.css'

function ProductList({product}) {
  const { image, title, id, rating, price } = product;
  return (
    <div className={classes.card_contanier}>
      <a href=''>
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
      </div>
      <div className={classes.rating}>
        {/* {rating} */}
        <Rating value={rating.rate} precision={0.1} />
        {/* {count} */}
        <small>{rating.count}</small>
      </div>
      <div className={classes.price}>
        {/* {price} */}
        <CurrencyFormat amount={price}/>
      </div>
      <button className={classes.button}>
        add to cart
      </button>
    </div>
  )
}

export default ProductList