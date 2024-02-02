import { UseShoppingChart } from "../context/shoppingCartContext"
import { formatCurrency  } from "../utilities/formatCurrency"
import storeItems from "../data/items.json"

type CartItemProps = {
    id: number
    quantity: number
}

function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = UseShoppingChart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <div>
        <div className="flex gap-2 items-center justify-center">
            <img src={item.imgUrl} className="w-[100px] h-[75px] object-cover mb-4" />
           <div className="grid grid-cols-2 gap-14">
           <div>
                <div>
                    {item.name} {" "} {quantity > 1 && (<span>{quantity}x</span>)}
                </div>
                <div>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div className="flex gap-2 justify-center">
            {formatCurrency(item.price * quantity)}
            <button onClick={() => removeFromCart(item.id)} className="px-2 border border-red-500 ">&times;</button>
            </div>
           </div>
        </div>
   </div>
    )
}

export default CartItem