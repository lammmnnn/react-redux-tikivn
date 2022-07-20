import React from 'react';
import { useAppDispatch } from '../app/hooks';
import {
    addItemID
} from '../features/counter/counterSlice';

export function DealListComp() {
    const dispatch = useAppDispatch();
    /*const addingItem = (e: React.MouseEvent<HTMLElement>) => {
        dispatch(addItemID(
            e.currentTarget.getAttribute("data-view-index")
        ))
    }*/
    return (
        <>
            <a data-view-index="12" href="#addtocart" className="deal d-flex flex-column w-1o5" data-index="0">
                <img className="img" src={require('../img/slicer-sale/slicer_sale1.jpg')} alt='' />
                <div className="price-text">
                    <span className="price-discount__price">99.000 đ</span>
                    <span className="price-discount__discount">-80%</span>
                </div>
            </a>
            <a data-view-index="13" href="#addtocart" className="deal d-flex flex-column w-1o5" data-index="1">
                <img className="img" src={require('../img/slicer-sale/slicer_sale2.jpg')} alt='' />
                <div className="price-text">
                    <span className="price-discount__price">99.000 đ</span>
                    <span className="price-discount__discount">-80%</span>
                </div>
            </a>
            <a data-view-index="14" href="#addtocart" className="deal d-flex flex-column w-1o5" data-index="2">
                <img className="img" src={require('../img/slicer-sale/slicer_sale3.jpg')} alt='' />
                <div className="price-text">
                    <span className="price-discount__price">99.000 đ</span>
                    <span className="price-discount__discount">-80%</span>
                </div>
            </a>
            <a data-view-index="15" href="#addtocart" className="deal d-flex flex-column w-1o5" data-index="3">
                <img className="img" src={require('../img/slicer-sale/slicer_sale4.jpg')} alt='' />
                <div className="price-text">
                    <span className="price-discount__price">99.000 đ</span>
                    <span className="price-discount__discount">-80%</span>
                </div>
            </a>
            <a data-view-index="16" href="#addtocart" className="deal d-flex flex-column w-1o5" data-index="4">
                <img className="img" src={require('../img/slicer-sale/slicer_sale5.jpg')} alt='' />
                <div className="price-text">
                    <span className="price-discount__price">99.000 đ</span>
                    <span className="price-discount__discount">-80%</span>
                </div>
            </a>
        </>
    )
}