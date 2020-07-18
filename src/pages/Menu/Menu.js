import React, { useEffect } from "react";
import styles from "./Menu.module.scss";
import Nav from "../../components/Nav";
import MenuItem from "../../components/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { currencyUpdateType } from "../../store/currency";
import { menuUpdateData } from "../../store/menu";

const Menu = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector((state) => state.cart.cartCount);
    const menuData = useSelector((state) => state.menu.menuData);
    const cartOrder = useSelector((state) => state.cart.cartOrder);

    const goToOrder = () => {
        console.log(cartOrder);
    };

    const changeCurrency = (curr) => {
        dispatch(currencyUpdateType(curr));
    };

    useEffect(() => {
        const testData = [
            {
                id: "asdasd2132dw2",
                name: "Margherita",
                price: 9.4,
                quantity: 1,
            },
            {
                id: "asdasd2132dw22",
                name: "Margherita",
                price: 5.48,
                quantity: 1,
            },
            {
                id: "asdasd2132dw21",
                name: "Margherita",
                price: 19.49,
                quantity: 1,
            },
            {
                id: "asdasd2132dw232",
                name: "Margherita",
                price: 13,
                quantity: 1,
            },
            {
                id: "asdasd213223dw2",
                name: "Margherita",
                price: 6,
                quantity: 1,
            },
        ];

        dispatch(menuUpdateData(testData));
    }, []);

    return (
        <div className={styles.layout}>
            <div className={styles.cart} onClick={goToOrder}>
                <div className={styles.cart__item__count}>{cartCount}</div>
            </div>

            <div className={styles.currency__picker}>
                <div>
                    <input
                        type="radio"
                        name="currency"
                        id="usd"
                        defaultChecked
                    ></input>
                    <label
                        htmlFor="usd"
                        onClick={(e) => changeCurrency(e.target.htmlFor)}
                    >
                        &#36;
                    </label>
                </div>
                <div>
                    <input type="radio" name="currency" id="eur"></input>
                    <label
                        htmlFor="eur"
                        onClick={(e) => changeCurrency(e.target.htmlFor)}
                    >
                        &euro;
                    </label>
                </div>
            </div>

            <Nav />

            <div className={styles.menu__h1}>MENU</div>

            <div className={styles.menu}>
                {Array.from(menuData).map((e) => (
                    <MenuItem
                        id={e.id}
                        name={e.name}
                        price={e.price}
                        quantity={e.quantity}
                        conversionConst={0.88}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
