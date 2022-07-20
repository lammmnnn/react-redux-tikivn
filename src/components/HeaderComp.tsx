import React from 'react';
import {CartComp} from "./CartComp";
import {useAppDispatch} from "../app/hooks";
import {navigatePage} from "../features/counter/counterSlice";

export function HeaderComp() {
    const dispatch = useAppDispatch();
    const navigatingPage = () => {
        dispatch(navigatePage("main"))
    }

    return (
        <header id="main-header" className="style-header">
            <div className="header-container container">
                <div className="header-wrap d-flex flex-wrap justify-content-between">
                    <a href="#freeship" className="order-0 d-lg-none col-4 mt-3">
                        <img className="logo-freeship" src={require('../img/header/freeship.png')} alt=''></img>
                    </a>
                    <a href="#home" onClick={navigatingPage} className="logo-menu order-1 order-lg-0 col-4 col-lg-2 mt-3 d-flex justify-content-center justify-content-lg-start">
                        <img src={require('../img/header/tiki.png')} alt=''></img>
                    </a>
                    <div className="FormSearch order-3 order-lg-2 d-flex flex-row col-12 col-lg-7 mt-2 mt-lg-3 bg-white">
                        <img className="iconSearch d-lg-none ml-2" src={require('../img/header/search_mobile.png')} alt='' />
                        <input type="text" value="" className="FormSearch__input ml-1 ml-lg-2"
                               placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."/>
                        <button id="searchbar_button" className="FormSearch__button d-none d-lg-block">
                            <img className="iconSearch mr-2" src={require('../img/header/search.png')} alt='' />Tìm Kiếm
                        </button>
                    </div>
                    <CartComp />
                </div>
            </div>
        </header>
    );
}