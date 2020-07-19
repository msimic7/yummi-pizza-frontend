import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Cart.module.scss";
import Nav from "../../components/Nav";
import OrderItem from "../../components/OrderItem";
import { currencyUpdateType } from "../../store/currency";

const Order = () => {
    const dispatch = useDispatch();
    const cartOrder = useSelector((state) => state.cart.cartOrder);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const currencyType = useSelector((state) => state.currency.currencyType);
    const currencyConversionConst = useSelector(
        (state) => state.currency.currencyConversionConst
    );

    const changeCurrency = (curr) => {
        dispatch(currencyUpdateType(curr));
    };

    return (
        <div className={styles.layout}>
            <div className={styles.currency__picker}>
                <div>
                    <input
                        type="radio"
                        name="currency"
                        id="usd"
                        defaultChecked={currencyType === "usd" ? true : false}
                    ></input>
                    <label
                        htmlFor="usd"
                        onClick={(e) => changeCurrency(e.target.htmlFor)}
                    >
                        &#36;
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="currency"
                        id="eur"
                        defaultChecked={currencyType === "eur" ? true : false}
                    ></input>
                    <label
                        htmlFor="eur"
                        onClick={(e) => changeCurrency(e.target.htmlFor)}
                    >
                        &euro;
                    </label>
                </div>
            </div>

            <Nav />
            <div className={styles.cart__h1}>CART</div>

            <div className={styles.cart}>
                {cartOrder.map((e) => {
                    return <OrderItem item={e} />;
                })}
                {cartOrder.length === 0 ? (
                    <div className={styles.cart__order__empty}>NO ITEMS</div>
                ) : (
                    <>
                        <div className={styles.cart__order__total__price}>
                            <div className={styles.total}>
                                <p>
                                    {currencyType === "usd"
                                        ? `${totalPrice.toFixed(1)}$`
                                        : `${(
                                              totalPrice *
                                              currencyConversionConst
                                          ).toFixed(1)}€`}
                                </p>
                                <Link to="/order">
                                    <button className={styles.cart__order__btn}>
                                        ORDER
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Order;
