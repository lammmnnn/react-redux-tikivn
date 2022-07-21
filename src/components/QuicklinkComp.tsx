import React from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function QuicklinkComp() {
    const slider = React.useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 10,
        slidesToScroll: 10,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    };
    const prev = () => { // @ts-ignore
        slider?.current?.slickPrev()};
    const next = () => { // @ts-ignore
        slider?.current?.slickNext()};
    return (
        <>
            <span className="slick-cus-previous d-none d-lg-flex" onClick={prev}>
                <img src={require('../img/qlink/nextArrow.png')} />
            </span>
            <Slider ref={slider} {...settings} className="quicklink-wrap row d-none d-lg-flex justify-content-lg-between flex-nowrap pt-3 pb-3">
                <a href="#link1" className="item pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink1.gif')} alt='' />
                    <span>Mua sắm có lời</span>
                </a>
                <a href="#link2" className="item pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink2.png')} alt='' />
                    <span>Siêu sale 7.7</span>
                </a>
                <a href="#link3" className="item pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink3.png')} alt='' />
                    <span>Đi chợ siêu tốc</span>
                </a>
                <a href="#link4" className="item pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink4.png')} alt='' />
                    <span>Đóng tiền, nạp thẻ</span>
                </a>
                <a href="#link5" className="item pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink5.png')} alt='' />
                    <span>Mua bán ASA/XU</span>
                </a>
                <a href="#link6" className="item pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink6.png')} alt='' />
                    <span>Mã giảm giá</span>
                </a>
                <a href="#link7" className="item pl-0 pr-0 d-lg-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink7.png')} alt='' />
                    <span>Bảo hiểm Tiki360</span>
                </a>
                <a href="#link8" className="item pl-0 pr-0 d-lg-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink8.png')} alt='' />
                    <span>Giảm đến 50%</span>
                </a>
                <a href="#link9" className="item pl-0 pr-0 d-lg-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink9.png')} alt='' />
                    <span>Hoàn tiền 15%</span>
                </a>
                <a href="#link10" className="item pl-0 pr-0 d-lg-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink10.png')} alt='' />
                    <span>Ưu đãi thanh toán</span>
                </a>
                <a href="#link1" className="item pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink1.gif')} alt='' />
                    <span>Mua sắm có lời</span>
                </a>
                <a href="#link2" className="item pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink2.png')} alt='' />
                    <span>Siêu sale 7.7</span>
                </a>
                <a href="#link3" className="item pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink3.png')} alt='' />
                    <span>Đi chợ siêu tốc</span>
                </a>
                <a href="#link4" className="item pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink4.png')} alt='' />
                    <span>Đóng tiền, nạp thẻ</span>
                </a>
                <a href="#link5" className="item pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink5.png')} alt='' />
                    <span>Mua bán ASA/XU</span>
                </a>
                <a href="#link6" className="item pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink6.png')} alt='' />
                    <span>Mã giảm giá</span>
                </a>
                <a href="#link7" className="item pl-0 pr-0 d-lg-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink7.png')} alt='' />
                    <span>Bảo hiểm Tiki360</span>
                </a>
                <a href="#link8" className="item pl-0 pr-0 d-lg-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink8.png')} alt='' />
                    <span>Giảm đến 50%</span>
                </a>
                <a href="#link9" className="item pl-0 pr-0 d-lg-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink9.png')} alt='' />
                    <span>Hoàn tiền 15%</span>
                </a>
                <a href="#link10" className="item pl-0 pr-0 d-lg-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink10.png')} alt='' />
                    <span>Ưu đãi thanh toán</span>
                </a>
            </Slider>
            <div className="quicklink-wrap w-100 row d-lg-none justify-content-lg-between flex-nowrap pt-3 pb-3">
                <a href="#link1" className="item col-3 col-lg-1 pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink1.gif')} alt='' />
                    <span>Mua sắm có lời</span>
                </a>
                <a href="#link2" className="item col-3 col-lg-1 pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink2.png')} alt='' />
                    <span>Siêu sale 7.7</span>
                </a>
                <a href="#link3" className="item col-3 col-lg-1 pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink3.png')} alt='' />
                    <span>Đi chợ siêu tốc</span>
                </a>
                <a href="#link4" className="item col-3 col-lg-1 pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink4.png')} alt='' />
                    <span>Đóng tiền, nạp thẻ</span>
                </a>
                <a href="#link5" className="item col-3 col-lg-1 pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink5.png')} alt='' />
                    <span>Mua bán ASA/XU</span>
                </a>
                <a href="#link6" className="item col-3 col-lg-1 pl-0 pr-0 d-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink6.png')} alt='' />
                    <span>Mã giảm giá</span>
                </a>
                <a href="#link7" className="item d-none col-lg-1 pl-0 pr-0 d-lg-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink7.png')} alt='' />
                    <span>Bảo hiểm Tiki360</span>
                </a>
                <a href="#link8" className="item d-none col-lg-1 pl-0 pr-0 d-lg-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink8.png')} alt='' />
                    <span>Giảm đến 50%</span>
                </a>
                <a href="#link9" className="item d-none col-lg-1 pl-0 pr-0 d-lg-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink9.png')} alt='' />
                    <span>Hoàn tiền 15%</span>
                </a>
                <a href="#link10" className="item d-none col-lg-1 pl-0 pr-0 d-lg-flex flex-column align-items-center">
                    <img src={require('../img/qlink/qlink10.png')} alt='' />
                    <span>Ưu đãi thanh toán</span>
                </a>
            </div>
            <span className="slick-cus-next d-none d-lg-flex" onClick={next}>
                <img src={require('../img/qlink/nextArrow.png')} />
            </span>
        </>
    )
}