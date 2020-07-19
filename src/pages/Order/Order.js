import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./Order.module.scss";
import Nav from "../../components/Nav";
import {
    cartClearOrder,
    cartClearCount,
    cartClearTotalPrice,
} from "../../store/cart";

const Order = () => {
    const { register, handleSubmit, errors } = useForm();
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (data, e) => {
        e.preventDefault();

        setSubmitted(true);

        dispatch(cartClearOrder());
        dispatch(cartClearCount());
        dispatch(cartClearTotalPrice());

        setTimeout(() => {
            history.push("/menu");
        }, 3000);
    };
    return (
        <div className={styles.layout}>
            <Nav />

            {submitted ? (
                <div className={styles.order__sent}>ORDER SENT!</div>
            ) : (
                <>
                    <div className={styles.order__h1}>ORDER DETAILS</div>

                    <form
                        className={styles.order}
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            type="input"
                            className={styles.order__field}
                            placeholder="Name"
                            name="name"
                            id="name"
                            ref={register({ required: true })}
                        />
                        {errors.name && (
                            <p className={styles.order__field__error}>
                                This field is required!
                            </p>
                        )}
                        <input
                            type="input"
                            className={styles.order__field}
                            placeholder="Surname"
                            name="surname"
                            id="surname"
                            ref={register({ required: true })}
                        />
                        {errors.surname && (
                            <p className={styles.order__field__error}>
                                This field is required!
                            </p>
                        )}
                        <input
                            type="input"
                            className={styles.order__field}
                            placeholder="Street"
                            name="street"
                            id="street"
                            ref={register({ required: true })}
                        />
                        {errors.street && (
                            <p className={styles.order__field__error}>
                                This field is required!
                            </p>
                        )}
                        <input
                            type="input"
                            className={styles.order__field}
                            placeholder="Street number"
                            name="streetNumber"
                            id="streetNumber"
                            ref={register({ required: true })}
                        />
                        {errors.streetNumber && (
                            <p className={styles.order__field__error}>
                                This field is required!
                            </p>
                        )}
                        <input
                            type="input"
                            className={styles.order__field}
                            placeholder="City"
                            name="city"
                            id="city"
                            ref={register({ required: true })}
                        />
                        {errors.city && (
                            <p className={styles.order__field__error}>
                                This field is required!
                            </p>
                        )}
                        <input
                            type="input"
                            className={styles.order__field}
                            placeholder="Phone number"
                            name="phoneNumber"
                            id="phoneNumber"
                            ref={register({ required: true })}
                        />
                        {errors.phoneNumber && (
                            <p className={styles.order__field__error}>
                                This field is required!
                            </p>
                        )}
                        <button type="submit">ORDER</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Order;
