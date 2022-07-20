import React from 'react';
import { useAppDispatch } from '../app/hooks';
import {
    addItemID
} from '../features/counter/counterSlice';
import {ItemRenderMainComp} from "./ItemRenderMainComp";

export function SuggestionItemComp() {

    return (
        <>
            <ItemRenderMainComp index="0"
                                source={require("../img/suggest/suggest1.png")}
                                name="Thùng 24 Lon Nước Giải Khát
                                Coca-Cola vị Nguyên Bản Original 320ml1x24"
                                price="210.000 ₫"
                                discount="-13%" />
            <ItemRenderMainComp index="1"
                                source={require("../img/suggest/suggest2.jpg")}
                                name="Truyện tranh One Piece"
                                price="60.000 ₫"
                                discount="-13%" />
            <ItemRenderMainComp index="2"
                                source={require("../img/suggest/suggest3.jpg")}
                                name="Truyện tranh Tokyo Revengers"
                                price="50.000 ₫"
                                discount="-13%" />
            <ItemRenderMainComp index="3"
                                source={require("../img/suggest/suggest4.jpg")}
                                name="Iphone 12 Pro"
                                price="10.500.000 ₫"
                                discount="-13%" />
            <ItemRenderMainComp index="4"
                                source={require("../img/suggest/suggest5.jpg")}
                                name="Iphone 7 màu"
                                price="70.000 ₫"
                                discount="-13%" />
            <ItemRenderMainComp index="5"
                                source={require("../img/suggest/suggest6.png")}
                                name="Giày da siêu mỏng cánh giá siêu hời"
                                price="20.100.000 ₫"
                                discount="-13%" />
            <ItemRenderMainComp index="6"
                                source={require("../img/suggest/suggest7.jpg")}
                                name="Đệm Kimđan nhập khẩu từ chợ Kim Biên"
                                price="210.000 ₫"
                                discount="-13%" />
            <ItemRenderMainComp index="7"
                                source={require("../img/suggest/suggest8.jpg")}
                                name="Chai dầu xả Dove tặng kèm bông tăm xỉa răng"
                                price="50.000 ₫"
                                discount="-13%" />
            <ItemRenderMainComp index="8"
                                source={require("../img/suggest/suggest9.png")}
                                name="Sữa rửa mặt Nvidia tặng kèm túi vải sành điệu"
                                price="210.000 ₫"
                                discount="-13%" />
            <ItemRenderMainComp index="9"
                                source={require("../img/suggest/suggest10.jpg")}
                                name="Dầu gội Clear chai lọ tặng kèm tăm xỉa răng"
                                price="50.000 ₫"
                                discount="-13%" />
            <ItemRenderMainComp index="10"
                                source={require("../img/suggest/suggest11.jpg")}
                                name="Dầu gội CLEAR MEN chuẩn nam tính chai màu đen"
                                price="40.000 ₫"
                                discount="-13%" />
            <ItemRenderMainComp index="11"
                                source={require("../img/suggest/suggest12.jpg")}
                                name="2 Chai sữa tắm Johnson Baby tặng kèm tăm xỉa răng"
                                price="210.000 ₫"
                                discount="-13%" />
        </>
    )
}

