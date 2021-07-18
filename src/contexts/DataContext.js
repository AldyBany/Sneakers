import React , {createContext, useState,useEffect} from 'react'
import{commerce} from '../lib/commerce'

export const DataContext = createContext()

const DataContextProvider = ({children})=>{

    const [products, setProducts] = useState([])
    const[cart, setCart]= useState({})
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async ()=>{
        const {data} = await commerce.products.list()
        setProducts(data)
    }

    const  fetchCart = async()=>{
        setCart(await commerce.cart.retrieve())
    }

    const handleAddTocart  = async (productId,quantity)=>{
        const {cart} = await commerce.cart.add(productId,quantity)
        setCart(cart)

    }


    const handleUpdateCartQty = async (productId, quantity)=>{
        const {cart}  = await commerce.cart.update(productId, {quantity})
        setCart(cart)
    }

    const handleRemoveCartQty = async (productId)=>{
        const {cart}  = await commerce.cart.remove(productId)
        setCart(cart)
    }

    const handleEmptycart = async ()=>{
        setCart( await commerce.cart.empty())
    }
    const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

 

    useEffect(()=>{
        fetchProducts()
        fetchCart()
        
    },[])

    // useEffect(()=>{
        
    // },[cart])

    
    return(
        <DataContext.Provider value={{products,cart,handleAddTocart,handleUpdateCartQty,handleRemoveCartQty,handleEmptycart,order,errorMessage,handleCaptureCheckout}}>
            {children}
        </DataContext.Provider>
    )
    
}
export default DataContextProvider

