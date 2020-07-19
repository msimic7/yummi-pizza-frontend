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
        const getMenuData = async () => {
            await fetch("http://localhost:8000/api/pizzas", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    dispatch(menuUpdateData(data.data));
                });
        };
        getMenuData();
        // eslint-disable-next-line
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
