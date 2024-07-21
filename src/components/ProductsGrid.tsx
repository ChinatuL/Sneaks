import { products } from "@lib/data";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
    return (
        <div className='grid gap-6  w-full md:grid-cols-2 lg:grid-cols-3 xl:gap-12'>
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
            })}
        </div>
    );
};
export default ProductsGrid;
