import React, { useState, useEffect, useMemo } from 'react';
import { useCart } from '../hooks/useCart';

// --- MOCK DATA ---
// In a real app, this would come from a context (like useCart()) or props.

// --- Sub-components for better organization ---

const CartItem = ({ item, onRemove }) => {
    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <img
                    className="bg-gray-100 rounded-lg p-2 text-xl"
                    src={`${item.icon}`}
                    alt={`${item.name} icon`} // Add a descriptive alt attribute
                    style={{imageRendering:'pixelated'}}
                />
                <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">₹{item.price.toFixed(2)}</p>
                </div>
            </div>
            <button onClick={() => onRemove(item._id)} className="remove-btn text-sm text-red-500 hover:text-red-700 font-medium">
                Remove
            </button>
        </div>
    );
}

const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm mx-auto">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-lg leading-6 font-bold text-gray-900">Payment Successful!</h3>
                <div className="mt-2 px-7 py-3">
                    <p className="text-sm text-gray-500">Your animation packs have been added to your account. Thank you for your purchase!</p>
                </div>
                <div className="mt-4">
                    <button onClick={onClose} className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-transform hover:scale-105">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- Main Checkout Component ---

const CheckoutPage = () => {
    const { cart, removeFromCart } = useCart();
    const [cartItems, setCartItems] = useState(cart);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cardInfo, setCardInfo] = useState({
        name: '',
        number: '',
        expiry: '',
        cvc: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        let formattedValue = value;

        if (id === 'number') {
            formattedValue = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
        }

        setCardInfo(prev => ({ ...prev, [id]: formattedValue }));
    };

    const handleRemoveItem = (itemId) => {
        removeFromCart(itemId)
        setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically process the payment with a service like Stripe
        console.log("Processing payment with:", cardInfo);
        setIsModalOpen(true);
    };

    const { subtotal, taxes, total } = useMemo(() => {
        const sub = cart.reduce((acc, item) => acc + item.price, 0);
        const taxRate = 0.18;
        const tax = sub * taxRate;
        const tot = sub + tax;
        return { subtotal: sub, taxes: tax, total: tot };
    }, [cart]);

    return (
        (cart &&

            <div className="bg-gray-50 font-sans h-9/10">
                <div className="container mx-auto h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full p-4">
                        {/* Left Column: Payment Details */}
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg h-full">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Payment Details</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                                        <input type="text" id="name" value={cardInfo.name} onChange={handleInputChange} placeholder="John Doe" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300" required />
                                    </div>
                                    <div>
                                        <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Card Information</label>
                                        <div className="relative">
                                            <input type="text" id="number" value={cardInfo.number} onChange={handleInputChange} placeholder="0000 0000 0000 0000" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300" required />
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                            <input type="text" id="expiry" value={cardInfo.expiry} onChange={handleInputChange} placeholder="MM / YY" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300" required />
                                        </div>
                                        <div>
                                            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                                            <input type="text" id="cvc" value={cardInfo.cvc} onChange={handleInputChange} placeholder="123" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300" required />
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-lg shadow-md hover:bg-indigo-700 transition-transform hover:scale-105">
                                        Pay Now
                                    </button>
                                </div>
                            </form>
                            <div className="mt-8 text-center">
                                <div className="flex items-center justify-center gap-2 text-gray-500">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5.002L2.5 5.051A10.003 10.003 0 0010 4.008a10.003 10.003 0 007.5 1.043l.334-.049A11.954 11.954 0 0110 1.944zM10 18c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd"></path></svg>
                                    <span className="text-sm">Secure SSL Encrypted Payment</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Order Summary */}
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg lg:order-first">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Order Summary</h2>
                            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                                {cart.length > 0 ? (
                                    cart.map(item => (
                                        <CartItem key={item._id} item={item} onRemove={handleRemoveItem} />
                                    ))
                                ) : (
                                    <p className="text-gray-500">Your cart is empty.</p>
                                )}
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-gray-700">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Taxes (18% GST)</span>
                                    <span className="font-medium">₹{taxes.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-gray-900">
                                    <span>Total</span>
                                    <span>₹{total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        )
    );
};

export default CheckoutPage;
