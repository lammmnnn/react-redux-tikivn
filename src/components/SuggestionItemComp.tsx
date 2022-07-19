import React from 'react';
import { useAppDispatch } from '../app/hooks';
import {
    addItemID
} from '../features/counter/counterSlice';

export function SuggestionItemComp() {
    const dispatch = useAppDispatch();

    const addingItem = (e: React.MouseEvent<HTMLElement>) => {
        dispatch(addItemID(
            e.currentTarget.getAttribute("data-view-index")
        ))
    }
    return (
        <>
            <a data-view-index="0" onClick={ addingItem } className="col-6 col-lg-2 p-2" href="#addtocart">
                <div className="flex-y">
                    <div className="thumbnail">
                        <img src={require('../img/suggest/suggest1.png')} alt='' />
                    </div>
                    <div className="info">
                        <div className="name">
                            <h3>Thùng 24 Lon Nước Giải Khát
                                Coca-Cola vị Nguyên Bản Original 320ml1x24</h3>
                        </div>
                        <div className="price-text">
                            <div className="price-discount__price">210.000 ₫</div>
                            <div className="price-discount__discount">-13</div>
                        </div>
                    </div>
                </div>
            </a>
            <a data-view-index="1" onClick={ addingItem } className="col-6 col-lg-2 p-2" href="#addtocart">
                <div className="flex-y">
                    <div className="thumbnail">
                        <img src={require('../img/suggest/suggest2.jpg')} alt='' />
                    </div>
                    <div className="info">
                        <div className="name">
                            <h3>Truyện tranh One Piece</h3>
                        </div>
                        <div className="price-text">
                            <div className="price-discount__price">60.000 ₫</div>
                            <div className="price-discount__discount">-13%</div>
                        </div>
                    </div>
                </div>
            </a>
            <a data-view-index="2" onClick={ addingItem } className="col-6 col-lg-2 p-2" href="#addtocart">
                <div className="flex-y">
                    <div className="thumbnail">
                        <img src={require('../img/suggest/suggest3.jpg')} alt='' />
                    </div>
                    <div className="info">
                        <div className="name">
                            <h3>Truyện tranh Tokyo Revengers</h3>
                        </div>
                        <div className="price-text">
                            <div className="price-discount__price">50.000 ₫</div>
                            <div className="price-discount__discount">-13%</div>
                        </div>
                    </div>
                </div>
            </a>
            <a data-view-index="3" onClick={ addingItem } className="col-6 col-lg-2 p-2" href="#addtocart">
                <div className="flex-y">
                    <div className="thumbnail">
                        <img src={require('../img/suggest/suggest4.jpg')} alt='' />
                    </div>
                    <div className="info">
                        <div className="name">
                            <h3>Iphone 12 Pro</h3>
                        </div>
                        <div className="price-text">
                            <div className="price-discount__price">10.500.000 ₫</div>
                            <div className="price-discount__discount">-13%</div>
                        </div>
                    </div>
                </div>
            </a>
            <a data-view-index="4" onClick={ addingItem } className="col-6 col-lg-2 p-2" href="#addtocart">
                <div className="flex-y">
                    <div className="thumbnail">
                        <img src={require('../img/suggest/suggest5.jpg')} alt='' />
                    </div>
                    <div className="info">
                        <div className="name">
                            <h3>Iphone 7 màu</h3>
                        </div>
                        <div className="price-text">
                            <div className="price-discount__price">70.000 ₫</div>
                            <div className="price-discount__discount">-13%</div>
                        </div>
                    </div>
                </div>
            </a>
            <a data-view-index="5" onClick={ addingItem } className="col-6 col-lg-2 p-2" href="#addtocart">
                <div className="flex-y">
                    <div className="thumbnail">
                        <img src={require('../img/suggest/suggest6.png')} alt='' />
                    </div>
                    <div className="info">
                        <div className="name">
                            <h3>Giày da siêu mỏng cánh giá siêu hời</h3>
                        </div>
                        <div className="price-text">
                            <div className="price-discount__price">20.100.000 ₫</div>
                            <div className="price-discount__discount">-13%</div>
                        </div>
                    </div>
                </div>
            </a>
            <a data-view-index="6" onClick={ addingItem } className="col-6 col-lg-2 p-2" href="#addtocart">
                <div className="flex-y">
                    <div className="thumbnail">
                        <img src={require('../img/suggest/suggest7.jpg')} alt='' />
                    </div>
                    <div className="info">
                        <div className="name">
                            <h3>Thùng 24 Lon Nước Giải Khát
                                Coca-Cola vị Nguyên Bản Original 320ml1x24</h3>
                        </div>
                        <div className="price-text">
                            <div className="price-discount__price">210.000 ₫</div>
                            <div className="price-discount__discount">-13%</div>
                        </div>
                    </div>
                </div>
            </a>
            <a data-view-index="7" onClick={ addingItem } className="col-6 col-lg-2 p-2" href="#addtocart">
                <div className="flex-y">
                    <div className="thumbnail">
                        <img src={require('../img/suggest/suggest8.jpg')} alt='' />
                    </div>
                    <div className="info">
                        <div className="name">
                            <h3>Chai dầu xả Dove tặng kèm bông tăm xỉa răng</h3>
                        </div>
                        <div className="price-text">
                            <div className="price-discount__price">50.000 ₫</div>
                            <div className="price-discount__discount">-13%</div>
                        </div>
                    </div>
                </div>
            </a>
            <a data-view-index="8" onClick={ addingItem } className="col-6 col-lg-2 p-2" href="#addtocart">
                <div className="flex-y">
                    <div className="thumbnail">
                        <img src={require('../img/suggest/suggest9.png')} alt='' />
                    </div>
                    <div className="info">
                        <div className="name">
                            <h3>Sữa rửa mặt Nvidia tặng kèm túi vải sành điệu</h3>
                        </div>
                        <div className="price-text">
                            <div className="price-discount__price">210.000 ₫</div>
                            <div className="price-discount__discount">-13%</div>
                        </div>
                    </div>
                </div>
            </a>
            <a data-view-index="9" onClick={ addingItem } className="col-6 col-lg-2 p-2" href="#addtocart">
                <div className="flex-y">
                    <div className="thumbnail">
                        <img src={require('../img/suggest/suggest10.jpg')} alt='' />
                    </div>
                    <div className="info">
                        <div className="name">
                            <h3>Dầu gội Clear chai lọ tặng kèm tăm xỉa răng</h3>
                        </div>
                        <div className="price-text">
                            <div className="price-discount__price">50.000 ₫</div>
                            <div className="price-discount__discount">-13%</div>
                        </div>
                    </div>
                </div>
            </a>
            <a data-view-index="10" onClick={ addingItem } className="col-6 col-lg-2 p-2" href="#addtocart">
                <div className="flex-y">
                    <div className="thumbnail">
                        <img src={require('../img/suggest/suggest11.jpg')} alt='' />
                    </div>
                    <div className="info">
                        <div className="name">
                            <h3>Dầu gội CLEAR MEN chuẩn nam tính chai màu đen</h3>
                        </div>
                        <div className="price-text">
                            <div className="price-discount__price">40.000 ₫</div>
                            <div className="price-discount__discount">-13%</div>
                        </div>
                    </div>
                </div>
            </a>
            <a data-view-index="11" onClick={ addingItem } className="col-6 col-lg-2 p-2" href="#addtocart">
                <div className="flex-y">
                    <div className="thumbnail">
                        <img src={require('../img/suggest/suggest12.jpg')} alt='' />
                    </div>
                    <div className="info">
                        <div className="name">
                            <h3>2 Chai sữa tắm Johnson Baby tặng kèm tăm xỉa răng</h3>
                        </div>
                        <div className="price-text">
                            <div className="price-discount__price">210.000 ₫</div>
                            <div className="price-discount__discount">-13%</div>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

