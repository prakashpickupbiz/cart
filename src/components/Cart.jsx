import { useSelector, useDispatch } from 'react-redux';
import { selectCart, removeFromCart } from '../features/cartSlice';

const Cart = () => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="border p-4 rounded shadow mb-2">
                        <h2 className="text-xl">{item.name}</h2>
                        <p>Price: ${item.price}</p>
                        <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
