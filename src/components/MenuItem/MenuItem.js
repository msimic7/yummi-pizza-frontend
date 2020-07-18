import React from "react";
import styles from "./MenuItem.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { cartIncrement } from "../../store/cart";
import { cartUpdateOrder } from "../../store/cart";

const MenuItem = ({ id, name, price, conversionConst }) => {
    const dispatch = useDispatch();
    const menuData = useSelector((state) => state.menu.menuData);
    const currencyType = useSelector((state) => state.currency.currencyType);

    const cartItemCountIncrement = (id) => {
        dispatch(cartIncrement());

        let newOrderItem;
        menuData.forEach((e) => {
            if (e.id === id) newOrderItem = e;
        });
        dispatch(cartUpdateOrder(newOrderItem));
    };

    return (
        <div className={styles.card} key={id}>
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
                <button onClick={() => cartItemCountIncrement(id)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default MenuItem;
