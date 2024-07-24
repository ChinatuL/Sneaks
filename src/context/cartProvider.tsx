import { useReducer, useEffect } from "react";
import { CartContext } from "./cartContext";
import { cartReducer } from "./cartReducer";
import type { CartItem } from "@lib/definitions";
import { toast } from "sonner";
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    UPDATE_QUANTITY,
    CHECKOUT,
} from "./actions";

type CartProviderProps = {
    children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const storedCart = JSON.parse(
        localStorage.getItem("cart") || "[]"
    ) as CartItem[];

    const [state, dispatch] = useReducer(cartReducer, {
        cart: storedCart,
    });

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
        toast.success("Cart cleared");
    };

    const removeItemFromCart = (product: CartItem) => {
        dispatch({ type: REMOVE_FROM_CART, payload: { id: product.id } });
        toast.success("Item removed from cart");
    };

    const checkout = () => {
        dispatch({ type: CHECKOUT });
        toast.success("Checkout successful");
    };

    const getItemInCart = (product: CartItem) => {
        return state.cart.find((item) => item.id === product.id);
    };

    const updateQuantity = (product: CartItem, quantity: number) => {
        dispatch({
            type: UPDATE_QUANTITY,
            payload: { id: product.id, quantity },
        });
        toast.success("Item quantity updated");
    };

    const addItemToCart = (product: CartItem, quantity: number) => {
        const itemInCart = getItemInCart(product);
        if (itemInCart) {
            updateQuantity(product, quantity);
            toast.success("Item quantity updated");
        }
        dispatch({ type: ADD_TO_CART, payload: { ...product, quantity } });
        toast.success("Item added to cart");
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                clearCart,
                checkout,
                removeItemFromCart,
                updateQuantity,
                addItemToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
