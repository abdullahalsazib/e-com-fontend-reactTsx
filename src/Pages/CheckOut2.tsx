import { useState } from "react";

const Checkout2 = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="checkout-section">
      <form className="payment-method-form">
        <h2 className="text-lg font-semibold mb-2">Payment Methods</h2>

        {/* Direct Bank Transfer */}
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="directBankTransfer"
            name="paymentMethod"
            value="directBankTransfer"
            checked={paymentMethod === "directBankTransfer"}
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <label htmlFor="directBankTransfer" className="text-lg">
            Direct Bank Transfer
          </label>
        </div>

        {/* Cash On Delivery */}
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="cashOnDelivery"
            name="paymentMethod"
            value="cashOnDelivery"
            checked={paymentMethod === "cashOnDelivery"}
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <label htmlFor="cashOnDelivery" className="text-lg">
            Cash On Delivery
          </label>
        </div>

        {/* Conditional Display for Payment Information */}
        {paymentMethod === "directBankTransfer" && (
          <div className="bank-transfer-info mt-4">
            <h3 className="font-semibold">Bank Account Details:</h3>
            <p>Bank Name: XYZ Bank</p>
            <p>Account Number: 1234567890</p>
            <p>Account Type: Savings</p>
          </div>
        )}

        {paymentMethod === "cashOnDelivery" && (
          <div className="cash-on-delivery-info mt-4">
            <p>Please have the exact amount ready at the time of delivery.</p>
          </div>
        )}
      </form>

      <button className="mt-5 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">
        Place order
      </button>
    </div>
  );
};

export default Checkout2;
