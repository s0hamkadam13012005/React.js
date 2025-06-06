import { Fragment } from "react";
import dayjs from "dayjs";
import axios from "axios";

export function OrderDetailsGrid({order, loadCart}) {
    return(
         <div className="order-details-grid">
                            {order.products.map((orderProduct) => {
                                 const addToCart = async () => {
                      await axios.post('/api/cart-items', {
                        // Note: you can also get the productId from
                        // orderProduct.productId
                        productId: orderProduct.product.id,
                        quantity: 1
                      });
                      await loadCart();
                    };
                                return (
                                    <Fragment key={orderProduct.product.id}>
                                        <div className="product-image-container">
                                            <img src={orderProduct.product.image} />
                                        </div>

                                        <div className="product-details">
                                            <div className="product-name">
                                                {orderProduct.product.name}
                                            </div>
                                            <div className="product-delivery-date">
                                                {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
                                            </div>
                                            <div className="product-quantity">
                                                Quantity: {orderProduct.quantity}
                                            </div>
                                            <button className="buy-again-button button-primary" onClick={addToCart}>
                                                <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                                <span className="buy-again-message"
                                                >Add to Cart</span>
                                            </button>
                                        </div>

                                        <div className="product-actions">
                                             <a href={`/tracking/${order.id}/${orderProduct.product.id}`}>
                                                <button className="track-package-button button-secondary">
                                                    Track package
                                                </button>
                                            </a>
                                        </div>
                                    </Fragment>
                                );
                            })}



                        </div>
    )
}