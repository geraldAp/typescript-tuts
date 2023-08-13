import React, { ReactElement, memo } from 'react'
import { ProductType } from '../context/ProductsProvider'
import { ReducerAction, ReducerActionType } from '../context/CartProvider'

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS : ReducerActionType,
    inCart: boolean,
}

const Product = ({product, dispatch, REDUCER_ACTIONS, inCart}: PropsType) : ReactElement  => {
//  vites way of working with dynamic images 
const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
 console.log(img)
 const onAddToCart = () => dispatch({type: REDUCER_ACTIONS.ADD, payload: {...product, qty:1}})
   
 const ItemInCart = inCart ? '-> Item in Cart: ✔' : null

const content = (
    <article className='product'>
        <h2>{product.name}</h2>
        <img src={img} alt={product.name} />
        <p>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(product.price)} {ItemInCart}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
        </article>
)

 return content 
}

function areProductsEqual(
    {
        product: prevProduct,
        inCart: prevInCart
    }:PropsType, {product: nextProduct, inCart: nextInCart}: PropsType
    
){
    return (
        Object.keys(prevProduct).every(key =>{
            return prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType]
        }) && prevInCart === nextInCart
    )
}

const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual )


export default MemoizedProduct
