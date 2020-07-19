import React from "react";
import styles from "./OrderItem.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
    cartAddOrder,
    cartRemoveOrder,
    cartIncrement,
    cartDecrement,
    cartTotalPriceIncrease,
    cartTotalPriceDecrease,
} from "../../store/cart";

const OrderItem = ({ item: { id, name, price, quantity } }) => {
    const dispatch = useDispatch();
    const currencyType = useSelector((state) => state.currency.currencyType);
    const menuData = useSelector((state) => state.menu.menuData);
    const currencyConversionConst = useSelector(
        (state) => state.currency.currencyConversionConst
    );

    const orderItemIncrement = (id) => {
        dispatch(cartIncrement());

        let newOrderItem;
        menuData.forEach((e) => {
            if (e.id === id) newOrderItem = e;
        });
        dispatch(cartAddOrder(newOrderItem));

        dispatch(cartTotalPriceIncrease(price));
    };

    const orderItemDecrement = (id) => {
        dispatch(cartDecrement());

        let newOrderItem;
        menuData.forEach((e) => {
            if (e.id === id) newOrderItem = e;
        });
        dispatch(cartRemoveOrder(newOrderItem));

        dispatch(cartTotalPriceDecrease(price));
    };

    return (
        <div key={id} className={styles.order__item}>
            <img
                src={require(`../../resources/images/${name}.png`)}
                alt={name}
            ></img>
            <div className={styles.order__item__desc}>
                {quantity}x {name}
            </div>
            <div className={styles.order__item__price}>
                {currencyType === "usd"
                    ? `${(price * quantity).toFixed(1)}$`
                    : `${(price * quantity * currencyConversionConst).toFixed(
                          1
                      )}€`}
            </div>
            <div className={styles.order__item__action__btns}>
                <button onClick={() => orderItemIncrement(id, price)}>+</button>
                <button onClick={() => orderItemDecrement(id, price)}>-</button>
            </div>
        </div>
    );
};

export default OrderItem;
