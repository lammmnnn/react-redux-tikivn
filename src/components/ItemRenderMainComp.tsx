import React from 'react';
import { useAppDispatch } from '../app/hooks';
import {
    addItemID
} from '../features/counter/counterSlice';

// @ts-ignore
export function ItemRenderMainComp({index, source, name, price, discount}) {
    const dispatch = useAppDispatch();

    const addingItem = (e: React.MouseEvent<HTMLElement>) => {
        dispatch(addItemID({
            index: index,
            name: name,
            source: source,
            price: price,
            discount: discount
        }))
    }
    return (
            <a data-view-index={index} onClick={ addingItem } className="col-6 col-lg-2 p-2" href="#addtocart">
                <div className="flex-y">
                    <div className="thumbnail">
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
                    </div>
                </div>
            </a>
    )
}