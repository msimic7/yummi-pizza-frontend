import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";
import Nav from "../../components/Nav";
import MenuItem from "../../components/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { currencyUpdateType } from "../../store/currency";
import { menuUpdateData } from "../../store/menu";

const Menu = () => {
    const dispatch = useDispatch();
    const menuData = useSelector((state) => state.menu.menuData);
    const cartCount = useSelector((state) => state.cart.cartCount);
    const currencyType = useSelector((state) => state.currency.currencyType);
    const currencyConversionConst = useSelector(
        (state) => state.currency.currencyConversionConst
    );

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
                id: "asdasdfrr2132dw22",
                name: "Margherita",
                price: 5.48,
                quantity: 1,
            },
            {
                id: "asdasd2ssd132dw21",
                name: "Margherita",
                price: 19.49,
                quantity: 1,
            },
            {
                id: "asdasd2132ddqfjdw232",
                name: "Margherita",
                price: 13,
                quantity: 1,
            },
            {
                id: "asdasdio21dgdfg3223dw2",
                name: "Margherita",
                price: 6,
                quantity: 1,
            },
            {
                id: "asdasdio2132vb23dw2",
                name: "Margherita",
                price: 7,
                quantity: 1,
            },
            {
                id: "asdasdio21sssawq3223dw2",
                name: "Margherita",
                price: 6.5,
                quantity: 1,
            },
            {
                id: "asdasdiodasdasd213223dw2",
                name: "Margherita",
                price: 9.1,
                quantity: 1,
            },
            {
                id: "asdasdio21saaaa3223dw2",
                name: "Margherita",
                price: 13.5,
                quantity: 1,
            },
        ];

        dispatch(menuUpdateData(testData));
    }, []);

    return (
        <div className={styles.layout}>
            <Link to="/cart">
                <div className={styles.cart}>
                    <div className={styles.cart__item__count}>{cartCount}</div>
                </div>
            </Link>

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

            <div className={styles.menu__h1}>MENU</div>

            <div className={styles.menu}>
                {Array.from(menuData).map((e) => (
                    <MenuItem
                        id={e.id}
                        name={e.name}
                        price={e.price}
                        quantity={e.quantity}
                        conversionConst={currencyConversionConst}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
