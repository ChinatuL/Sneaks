import { Link } from "react-router-dom";
import type { Product } from "@lib/definitions";
import iconCart from "@icons/cart-yellow.svg";

type ProductCardProps = {
    product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
    const { id, name, price, src } = product;

    return (
        <div className='flex flex-col p-4 bg-lightGray rounded-radius xl:p-6'>
            <button className='self-end p-2 rounded-full shadow-md bg-white'>
                <img src={iconCart} alt='add to cart' />
            </button>
            <Link to={`/products/${id}`} className='flex flex-col gap-4'>
                <div className='self-center'>
                    <img src={src} alt='' />
                </div>
                <div className='flex justify-between w-full font-medium'>
                    <h3 className='uppercase 2xl:text-lg'>{name}</h3>
                    <p>${price}</p>
                </div>
            </Link>
        </div>
    );
};
export default ProductCard;
