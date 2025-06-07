import './CheckoutHeader.css';
import { Link } from 'react-router';
export function CheckoutHeader({ cart }) {
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });


    return (
        <>

            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/">
                       <span className='checkout-home-link'> <img className="home-logo" src='home.png'></img> Home</span>
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<Link className="return-to-home-link"
                            to="/">
                                {totalQuantity} items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>

        </>
    )
}