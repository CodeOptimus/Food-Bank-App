import { useState } from "react";
import "./PlaceOrder.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import PaymentSuccess from "../../components/PaymentSuccess/PaymentSuccess";
import { useNavigate } from "react-router-dom";

export const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    setShowPaymentSuccess(true);
    
    // Navigate to home page after a delay
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <form className="place-order" onSubmit={handlePayment}>
      {showPaymentSuccess && (
        <PaymentSuccess onClose={() => setShowPaymentSuccess(false)} />
      )}
      <div className="place-order-left">
        <p className="title">Delivery Information </p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Street" required />
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="tel" placeholder="Phone Number" required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2> Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Gh₵{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
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
          <button type="submit">Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;