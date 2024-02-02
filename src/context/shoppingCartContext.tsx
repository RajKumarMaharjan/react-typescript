import { ReactNode, createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type ShoppingCartProviderProps = {
    children: ReactNode

}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    getCartCount: () => number
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function UseShoppingChart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(true)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItem => {
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

    function decreaseCartQuantity(id: number) {
        setCartItems(currItem => {
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
        setCartItems(currItem => {
            return currItem.filter(item => item.id !== id)
        })
    }

    function getCartCount() {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }

    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            getCartCount,
            cartItems,
            cartQuantity,
            openCart,
            closeCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}