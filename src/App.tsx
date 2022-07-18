import React from 'react';
import './App.css';
import {HeaderComp} from "./components/HeaderComp";
import {DealListComp} from "./components/DealListComp";
import {SuggestionItemComp} from "./components/SuggestionItemComp";

function App() {
  return (
    <div className="App">
      <div className='home-page'>
        <HeaderComp />
        <main>
          <div className="contain container-fluid mb-2 pt-2 pt-lg-3">
            <div className="banner-wrapper row justify-content-around">
              <div className="banner col-12 col-lg-8 pl-0 pr-0" id="banner-1">
                <img className="img d-none d-lg-block" src={require('./img/banner/banner1.png')} alt='' />
                <img className="img d-lg-none" src={require('./img/banner/banner1_mobile.png')} alt='' />
              </div>
              <div className="banner d-none d-lg-block col-lg-4 pl-0 pr-0 pl-2" id="banner-2">
                <img className="img" src={require('./img/banner/banner2.png')} alt='' />
              </div>
            </div>
              <div className="banner-wrapper row mb-2">
                <div id="home_deal" className="d-none d-lg-block col-lg-7 pl-0 pr-0">
                  <div className="header row pt-3 pl-3 pr-3">
                    <div className="header-left">
                      <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" alt="flash deal"/>
                      <img width="21" src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
                           alt="flash deal" />
                      <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="flash deal" />
                    </div>
                    <div className="navigation">
                      <a href="#xemthem">Xem thêm</a>
                    </div>
                  </div>
                  <div className="body">
                    <div className="list-deal row">
                      <DealListComp />
                    </div>
                  </div>
                </div>
                <div className="RewardHub-wrapper-smaller col-lg-5 pl-0 pr-0 pl-lg-2">
                  <div className="slick-slider banners-reward h-100">
                    <div className="h-100" id="banner banner-reward">
                      <img className="img d-none d-lg-block h-100" src={require('./img/banner/banner4.png')} alt='' />
                      <img className="img d-lg-none h-100" src={require('./img/banner/banner4_mobile.png')} alt='' />
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="container-fluid pl-0 pr-0">
            <div className="Ad-wrap row align-items-center">
              <div></div>
              <a href="#ad1" className="col-4 col-lg-2 pr-1 p-lg-1">
                <img className="img" src={require('./img/ad/ad_lg1.png')} alt='' />
              </a>
              <a href="#ad2" className="col-4 col-lg-8 pl-0 pr-0">
                <img className="img d-none d-lg-block h-100" src={require('./img/ad/ad_lg2.png')} alt='' />
                <img className="img d-lg-none" src={require('./img/ad/ad_lg2_mobile.png')} alt='' />
              </a>
              <a href="#ad3" className="col-4 col-lg-2 pl-1 p-lg-1">
                <img className="img" src={require('./img/ad/ad_lg3.png')} alt='' />
              </a>
            </div>
          </div>
          <div className="container-fluid mt-lg-2 pl-0 pr-0 pl-lg-3 pr-lg-3">
            <div className="quicklink-wrap row pt-3 pb-3 justify-content-lg-between flex-nowrap">
              <a href="#link1" className="item col-3 col-lg-1 pl-0 pr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink1.gif')} alt='' />
                <span>Mua sắm có lời</span>
              </a>
              <a href="#link2" className="item col-3 col-lg-1 pl-0 pr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink2.png')} alt='' />
                <span>Siêu sale 7.7</span>
              </a>
              <a href="#link3" className="item col-3 col-lg-1 pl-0 pr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink3.png')} alt='' />
                <span>Đi chợ siêu tốc</span>
              </a>
              <a href="#link4" className="item col-3 col-lg-1 pl-0 pr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink4.png')} alt='' />
                <span>Đóng tiền, nạp thẻ</span>
              </a>
              <a href="#link5" className="item col-3 col-lg-1 pl-0 pr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink5.png')} alt='' />
                <span>Mua bán ASA/XU</span>
              </a>
              <a href="#link6" className="item col-3 col-lg-1 pl-0 pr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink6.png')} alt='' />
                <span>Mã giảm giá</span>
              </a>
              <a href="#link7" className="item d-none col-lg-1 pl-0 pr-0 d-lg-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink7.png')} alt='' />
                <span>Bảo hiểm Tiki360</span>
              </a>
              <a href="#link8" className="item d-none col-lg-1 pl-0 pr-0 d-lg-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink8.png')} alt='' />
                <span>Giảm đến 50%</span>
              </a>
              <a href="#link9" className="item d-none col-lg-1 pl-0 pr-0 d-lg-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink9.png')} alt='' />
                <span>Hoàn tiền 15%</span>
              </a>
              <a href="#link10" className="item d-none col-lg-1 pl-0 pr-0 d-lg-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink10.png')} alt='' />
                <span>Ưu đãi thanh toán</span>
              </a>
            </div>
          </div>
          <div className="container-fluid mt-2 pl-0 pr-0 pl-lg-3 pr-lg-3">
            <div className="suggestion-wrap">
              <div className="header">
                <h2>Gợi Ý Hôm Nay</h2>
              </div>
              <div className="style-infinite-scroll bg-white">
                <div className="content row">
                  <SuggestionItemComp />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
