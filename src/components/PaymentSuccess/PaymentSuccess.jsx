import React, { useEffect } from 'react';
import './PaymentSuccess.css';

const PaymentSuccess = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="payment-success-overlay">
      <div className="payment-success-popup">
        <div className="success-icon">🎉</div>
        <h2>Payment Successful!</h2>
        <p>Thank you for your order. Your food is on the way! 🚚</p>
      </div>
    </div>
  );
};

export default PaymentSuccess; 