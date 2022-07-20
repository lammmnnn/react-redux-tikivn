import React from 'react';
import { useAppDispatch } from '../app/hooks';
import {
    removeItem
} from '../features/counter/counterSlice';

// @ts-ignore
export function ItemRenderCartComp({index, source, name, price, discount}) {
    const dispatch = useAppDispatch();
    const removingItem = () => {
      dispatch(removeItem(index))
    };

    return (
            <div data-view-index={index} className="p-4">
                <div className="d-flex flex-row">
                    <div className="d-flex align-items-center w-30">
                        <input type="checkbox" />
                    </div>
                    <div className="cart-content d-flex flex-row">
                        <div className="thumbnail mr-3">
                            <img src={source} alt='' />
                        </div>
                        <div className="info">
                            <div className="name">
                                <h3>{name}</h3>
                            </div>
                            <div className="price-text">
                                <div className="price-discount__price">{price}</div>
                                <div className="price-discount__discount">{discount}</div>
                            </div>
                            <div className="item-action d-flex flex-row justify-content-end align-items-center">
                                <span onClick={removingItem} className="item-delete">Xóa</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}