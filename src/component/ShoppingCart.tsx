import { UseShoppingChart } from "../context/shoppingCartContext"
import CartItem from "./CartItem"
import { formatCurrency  } from "../utilities/formatCurrency"
import storeItems from "../data/items.json"

function ShoppingCart() {
  const { cartItems } = UseShoppingChart()
  return (
    <div className="w-[400px] h-[100vh] bg-[#efefef] px-4">
      <div className="flex justify-between py-3">
        <p>CartList</p>
        <button>&times;</button>
      </div>
      <div> 
      { cartItems.map (item => (
        <CartItem key={item.id}{...item}/>
      )) }
      </div>
      <div>
       Total {formatCurrency(cartItems.reduce((total, cartItems) => {
         const item = storeItems.find(i => i.id === cartItems.id)
         return total + (item?.price || 0) * cartItems.quantity
       }, 0))}
       
   </div>
    </div>
  )
}

export default ShoppingCart