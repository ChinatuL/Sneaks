import { useCartContext } from "@context/cartContext";
import type { CartItem as CartItemType } from "@lib/definitions";
import CartItem from "./CartItem";

type CartItemsListProps = {
    cart: CartItemType[];
};

const CartItemsList = ({ cart }: CartItemsListProps) => {
    const { clearCart } = useCartContext();

    return (
        <div className='grid gap-6 w-full lg:w-6/12 xl:w-7/12'>
            <div className='grid gap-6'>
                {cart.map((item) => {
                    return <CartItem key={item.id} item={item} />;
                })}
            </div>
            <div className='w-full h-[2px] bg-lightGray'></div>
            <button
                onClick={clearCart}
                className='border border-black rounded py-2 px-4 text-sm font-medium transition-ease hover:bg-black hover:text-white lg:justify-self-end lg:w-max'
            >
                Clear Cart
            </button>
        </div>
    );
};
export default CartItemsList;
