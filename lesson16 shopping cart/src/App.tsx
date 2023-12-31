import React,{useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

const App = () => {
  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart/> : <ProductList/>

  const content = (
    <>
    <Header  viewCart={viewCart } setViewCart= {setViewCart}/>
    {pageContent}
    <Footer viewCart = {viewCart} />
    </>
  )
  
  return content
}

export default App
