import { useState, useCallback } from "react"
import { UseShoppingChart } from "../context/shoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"


type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = UseShoppingChart()

    const quantity = getItemQuantity(id);

    const [, setForceUpdate] = useState({});

    const memoizedForceUpdate = useCallback(() => {
        setForceUpdate({});
    }, [setForceUpdate]);

    const handleAddToCart = () => {
        increaseCartQuantity(id);
        memoizedForceUpdate();
    };

    return (
        <div>
            <img src={imgUrl} className="h-[200px] w-[300px] object-cover rounded-t-lg" alt={`${name} Image`} />
            <div className="flex justify-between item-center mt-2 px-2 mb-4">
                <span className="text-xl font-semi-bold text-gray-600">{name}</span >
                <span className="text-gray-400 text-xl" >{formatCurrency(price)}</span >
            </div>
            <div className="my-auto">
                {quantity === 0 ? (
                    <button onClick={handleAddToCart} className="w-full bg-blue-500 py-2 text-[#efefef] text-lg">+ Add To Cart</button>
                ) : <div className="flex items-center flex-col gap-3">
                    <div className="flex justify-center gap-2">
                        <button onClick={() => decreaseCartQuantity(id)} className="bg-blue-500 text-white px-2 "> - </button>
                        <div>
                            <span className="text-xl mr-1">{quantity}</span>
                            in cart
                        </div>
                        <button onClick={() => increaseCartQuantity(id)} className="bg-blue-500 text-white px-2 "> + </button>
                    </div>
                    <button onClick={() => removeFromCart(id)} className="bg-red-400 text-white text-lg py-1 px-4">Remove </button>
                </div>}
            </div>
        </div>
    )
}
