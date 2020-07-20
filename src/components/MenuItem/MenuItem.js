import React from "react";
import styles from "./MenuItem.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
    cartIncrement,
    cartAddOrder,
    cartTotalPriceIncrease,
} from "../../store/cart";

const MenuItem = ({ id, name, price, conversionConst }) => {
    const dispatch = useDispatch();
    const menuData = useSelector((state) => state.menu.menuData);
    const currencyType = useSelector((state) => state.currency.currencyType);

    const handleClick = (id, price) => {
        dispatch(cartIncrement());

        let newOrderItem;
        menuData.forEach((e) => {
            if (e.id === id) newOrderItem = e;
        });
        dispatch(cartAddOrder(newOrderItem));

        dispatch(cartTotalPriceIncrease(price));
    };

    return (
        <div className={styles.card}>
            <div className={styles.pizza__name}>{name}</div>

            <img
                src={require(`../../resources/images/${name}.png`)}
                alt={name}
            ></img>

            <div className={styles.pizza__info}>
                <div className={styles.pizza__price}>
                    {(
                        price * (currencyType === "usd" ? 1 : conversionConst)
                    ).toFixed(1)}
                    {currencyType === "usd" ? "$" : "€"}
                </div>
                <button onClick={() => handleClick(id, price)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default MenuItem;
