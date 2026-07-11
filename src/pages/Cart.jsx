import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import '../styles/cart.css';

const DELIVERY_FEE = 95;
const GST = 70;

export default function Cart() {
  const { cart, updateQty, removeItem } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = total > 300 ? 25 : 0;
  const toPay = cart.length === 0 ? 0 : total + DELIVERY_FEE + GST - discount;

  return (
    <div className="bg-light pb-5" style={{ minHeight: '100vh' }}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-7 mb-4">
            <div className="bg-white rounded shadow-sm p-4 mb-4">
              <h5>Add a delivery address</h5>
              <p className="text-muted mb-3">
                You seem to be in the new location
              </p>
              <div className="border rounded p-4 text-center mb-4">
                <div className="mb-2">
                  <span role="img" aria-label="location">
                    📍
                  </span>{' '}
                  Add New Address
                </div>
                <button className="btn btn-outline-success btn-sm">
                  ADD NEW
                </button>
              </div>
              <h5>Payment</h5>
              <div className="border rounded p-4 text-center text-muted">
                Payment options will appear here.
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-5">
            <div className="cart-summary">
              <div id="cart-items">
                {cart.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cart.map((item, idx) => (
                    <div
                      className="d-flex align-items-center mb-3"
                      key={item.name}
                    >
                      <img
                        src={item.img}
                        className="cart-item-img"
                        alt={item.name}
                      />
                      <div className="flex-grow-1">
                        <div className="font-weight-bold">{item.name}</div>
                        <div className="text-muted small">
                          {item.category || ''}
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary btn-sm qty-btn"
                          onClick={() => updateQty(idx, -1)}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.qty}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm qty-btn"
                          onClick={() => updateQty(idx, 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="ml-3 font-weight-bold">
                        ₹{item.price * item.qty}
                      </div>
                      <button
                        className="btn btn-danger btn-sm ml-2"
                        onClick={() => removeItem(idx)}
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>
              <hr />
              <div id="cart-bill">
                <div className="bill-details">
                  <div className="row">
                    <div className="col">Item Total</div>
                    <div className="col text-right">₹{total}</div>
                  </div>
                  <div className="row">
                    <div className="col">Delivery Fee</div>
                    <div className="col text-right">
                      ₹{cart.length === 0 ? 0 : DELIVERY_FEE}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">Extra discount for you</div>
                    <div className="col text-right text-success">
                      -₹{discount}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">GST & Other Charges</div>
                    <div className="col text-right">
                      ₹{cart.length === 0 ? 0 : GST}
                    </div>
                  </div>
                  <hr />
                  <div className="row to-pay">
                    <div className="col">TO PAY</div>
                    <div className="col text-right">₹{toPay}</div>
                  </div>
                </div>
              </div>
              <Link to="/menu" className="btn btn-primary btn-block mt-3">
                Back to Menu
              </Link>
              <button className="btn btn-primary btn-block mt-3">Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
