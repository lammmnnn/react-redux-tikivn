import React from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {navigatePage, selectCount} from "../features/counter/counterSlice";

export function CartComp() {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    const navigatingPage = () => {
        dispatch(navigatePage("cart"))
    }

    return (
        <a href="#Cart" onClick={navigatingPage}
           className="Cart-container order-2 order-lg-3 col-4 col-lg-2 pr-0 d-flex flex-row justify-content-end">
            <div className="Cart-wrapper">
                <img className="Cart-icon" src={require('../img/header/cart.png')} alt='' ></img>
                <span className="Cart-item-quantity">{count}</span>
            </div>
            <span className="Cart-text mt-2 d-none pr-1 d-lg-block">Giỏ Hàng</span>
        </a>
    );
}