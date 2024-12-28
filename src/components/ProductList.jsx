import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../features/productSlice';
import { addToCart } from '../features/cartSlice';

const ProductList = () => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();

    return (
        <div className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {products.map((product) => (
                <div key={product.id} className="border p-4 rounded shadow">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p className="text-lg">Price: ${product.price}</p>
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
