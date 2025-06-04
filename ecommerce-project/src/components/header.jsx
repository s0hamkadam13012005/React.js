import { NavLink } from 'react-router';
import './Header.css';
import { useState } from 'react';
import { useNavigate, useSearchParams} from 'react-router';
export function Header({ cart }) {
    const navigate = useNavigate();

    let totalQuantity = 0;
    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    })

   const [searchParams] = useSearchParams();

  // I need to use a different variable name since "search"
  // is already being used below.
  const searchText = searchParams.get('search');

  // || '' is a shortcut. It means if searchText does not exist
  // it will use a default value of ''.
  const [search, setSearch] = useState(searchText || '');

   const updateSearchInput = (event) => {
    setSearch(event.target.value);
   }

   const searchProducts = () => {
  console.log(`Navigating to /?search=${search}`);
  navigate(`/?search=${search}`);
}

    return (

        <>
            <div className="header">
                <div className="left-section">
                    <NavLink to="/" className="header-link">
                        <img className="logo"
                            src="images/logo-white.png" />
                        <img className="mobile-logo"
                            src="images/mobile-logo-white.png" />
                    </NavLink>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search"
                        value={search} onChange={updateSearchInput} />

                    <button className="search-button">
                        <img className="search-icon" src="images/icons/search-icon.png" onClick={searchProducts} />
                    </button>
                </div>

                <div className="right-section">
                    <NavLink className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </NavLink>

                    <NavLink className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src="images/icons/cart-icon.png" />
                        <div className="cart-quantity">{totalQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </NavLink>
                </div>
            </div>

        </>
    )
}