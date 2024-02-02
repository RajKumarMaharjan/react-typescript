import { UseShoppingChart } from "../context/shoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
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
            <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-3">
                <img src={item.imgUrl} className="w-[100px] h-[75px] object-cover mb-4 rounded-lg"/>
               
                    <div className="text-sm text-gray-600 font-thin tracking-tight text-start mt-8">
                        <div>
                            {item.name} {""} {quantity > 1 && (<span>{quantity}x</span>)}
                        </div>
                        <div>
                            {formatCurrency(item.price)}
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 justify-center">
                        <div className="text-sm text-gray-800 mt-5">
                            {formatCurrency(item.price * quantity)}
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="px-1 h-5 flex items-center mt-4 bg-red-500 text-gray-200 rounded-md">
                            &times;
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default CartItem