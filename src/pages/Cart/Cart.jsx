import React, { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import PaymentSuccess from "../../components/PaymentSuccess/PaymentSuccess";
import "./Cart.css";

export const Cart = () => {
  const { CartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  const handlePlaceOrder = () => {
    setShowPaymentSuccess(true);
    // Navigate to place-order page after a short delay
    setTimeout(() => {
      navigate("/place-order");
    }, 2000);
  };

  return (
    <div className="cart">
      {showPaymentSuccess && (
        <PaymentSuccess onClose={() => setShowPaymentSuccess(false)} />
      )}
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (CartItems[item._id] > 0) {
            return (
              <div key={item._id} className="cart-items-item">
                <div className="cart-items-title">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>Gh₵{item.price}</p>
                  <p>{CartItems[item._id]}</p>
                  <p>Gh₵{CartItems[item._id] * item.price}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Gh₵{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Charges</p>
              <p>Gh₵{getTotalCartAmount() === 0 ? 0 : 10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>
                Gh₵{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}
              </p>
            </div>
          </div>
          <button onClick={handlePlaceOrder}>Proceed to checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Enter promo code here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;