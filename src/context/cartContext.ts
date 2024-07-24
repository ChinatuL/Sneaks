import { createContext, useContext } from "react";
import type { CartItem } from "@lib/definitions";

type ContextType = {
    cart: CartItem[];
    clearCart: () => void;
    checkout: () => void;
    removeItemFromCart: (product: CartItem) => void;
    updateQuantity: (product: CartItem, quantity: number) => void;
    addItemToCart: (product: CartItem, quantity: number) => void;
};

type CartContextType = ContextType | null;

export const CartContext = createContext<CartContextType>(null);

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
};
