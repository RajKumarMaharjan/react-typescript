import { ReactNode, createContext, useContext, useState } from 'react';


type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuanity: (id: number) => number
    increaseCartQuanity: (id: number) => void
    decreaseCartQuanity: (id: number) => void
    removeFromCart: (id: number) => void
    getCartCount: () => number 
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function UseShoppingChart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItem, setCartItem] = useState<CartItem[]>([])

    function getItemQuanity(id: number) {
        return cartItem.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuanity(id: number) {
        setCartItem(currItem => {
            if (currItem.find(item => item.id === id) == null) {
                return [...currItem, { id, quantity: 1 }]
            } else {
                return currItem.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuanity(id: number) {
        setCartItem(currItem => {
            if (currItem.find(item => item.id === id)?.quantity === 1) {
                return currItem.filter(item => item.id !== id)
            } else {
                return currItem.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItem(currItem => {
            return currItem.filter(item => item.id !== id)
        })
    }

    function getCartCount() {
        return cartItem.reduce((total, item)=> total + item.quantity, 0)
    }

    return (
        <ShoppingCartContext.Provider value={{ getItemQuanity, increaseCartQuanity, decreaseCartQuanity, removeFromCart, getCartCount }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}