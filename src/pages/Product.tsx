import { useParams } from "react-router-dom";
import type { Product } from "@lib/definitions";
import { products } from "@lib/data";
import iconMinus from "@icons/minus.svg";
import iconPlus from "@icons/plus.svg";

const Product = () => {
    const { id } = useParams();

    if (!id) {
        return <div>Product not found</div>;
    }

    const product = products.find((product) => product.id.toString() === id);
    if (!product) {
        return <div>Product not found</div>;
    }
    const { name, description, price, src } = product;

    return (
        <div className='flex flex-col gap-6 md:gap-0 md:flex-row'>
            <div className='grid place-items-center w-full bg-lightGray rounded-radius md:w-6/12 lg:w-7/12 h-64 md:h-96'>
                <img src={src} alt={name} className='w-[70%]' />
            </div>
            <div className='w-full md:w-6/12 md:pl-10 lg:w-5/12 lg:pl-14 xl:pl-28'>
                <h2 className='text-xl uppercase font-medium md:text-2xl'>
                    {name}
                </h2>
                <p className='py-2 leading-normal'>{description}</p>
                <p className='py-4 text-lg font-medium md:text-xl'>${price}</p>
                <div className='flex items-center gap-2 pb-4'>
                    <button>
                        <img src={iconMinus} alt='reduce quantity' />
                    </button>
                    <span>1</span>
                    <button>
                        <img src={iconPlus} alt='increase quantity' />
                    </button>
                </div>
                <button className='border border-darkYellow text-darkYellow font-semibold text-sm uppercase py-2 px-4 rounded-md transition-ease hover:bg-darkYellow hover:text-white'>
                    add to cart
                </button>
            </div>
        </div>
    );
};
export default Product;
