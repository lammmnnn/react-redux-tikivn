import React from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {navigatePage, selectItemList} from "../features/counter/counterSlice";
import {ItemRenderMainComp} from "./ItemRenderMainComp";
import {ItemRenderCartComp} from "./ItemRenderCartComp";

export function CartPageComp() {
    const itemList = useAppSelector(selectItemList);
    const dispatch = useAppDispatch();
    const navigatingPage = (e: React.MouseEvent<HTMLElement>) => {
        dispatch(navigatePage("main"))
    }

    let cartDisplayDiv;
    if (itemList.length > 0) {
        // @ts-ignore
        cartDisplayDiv = itemList.map((item) =>
            <li>
                <ItemRenderCartComp // @ts-ignore
                    index={item.index} source={item.source} name={item.name} price={item.price} discount={item.discount} />
            </li>)
    } else {
        cartDisplayDiv =
            <div className="d-flex flex-column align-items-center">
                <img src={require('../img/empty_cart.png')} alt='' />
                <p className="mt-4 mb-4">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
                <a onClick={navigatingPage} href="#home">Tiếp Tục Mua Sắm</a>
            </div>
    }


    return (
        <main className="main-cart">
            <div className="container mt-2 pl-0 pr-0 pl-lg-3 pr-lg-3">
                <div className="main-title">
                    <h4 className="text-white">Giỏ Hàng</h4>
                </div>
                <div className="infinite-scroll mb-3 bg-white">
                    {cartDisplayDiv}
                </div>
            </div>
        </main>
    )
}
