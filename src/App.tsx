import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <div className="App">
      <div className='home-page'>
        <header id="main-header" className="style-header bg-primary">
          <div className="header-container container-fluid">
            <div className="header-wrap d-flex justify-content-around">
              <a href="/" className="logo-menu col-lg-2">
                <img src={require('./img/header/tiki.png')}></img>
              </a>
              <div className="FormSearch col-lg-7">
                <input type="text" data-view-id="main_search_form_input" value="" className="FormSearch__input"
                  placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."/>
                <button id="searchbar_button" className="FormSearch__button">
                  <img className="iconSearch" src={require('./img/header/search.png')}/>Tìm Kiếm
                </button>
              </div>
              <div className="Cart-container col-lg-2">
                <div className="Cart-wrapper">
                  <img className="Cart-icon" src={require('./img/header/cart.png')}></img>
                  <span className="Cart-item-quantity">0</span>
                </div>
                <span className="cart-text">Giỏ Hàng</span>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="Banner-container">
            <div className="Banner-wrapper">
              <div id="banner-1">
                <img src={require('./img/banner/banner1.png')}
              </div>
              <div id="banner-2">
                <img src={require('./img/banner/banner2.png')}
              </div>
            </div>
            <div className="Banner-wrapper">
                <div id="home_deal" className="Banner-wrapper-smaller">
                  <div className="header">

                  </div>
                  <div className="body">

                  </div>
                </div>
                <div className="RewardHub-wrapper-smaller">
                  <div className="slick-slider banners-reward">
                    <div id="banner-reward-1">
                      <img src={require('./img/banner/banner4.png')}/>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="Ad-container">
            <div className="Ad-wrap">
              <a href="" className="side-brand">
                <picture className="webpimg-container">
                  <source type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w200/ts/banner/15/54/a3/bd225c53334b2efebd361ef54b490f04.png.webp"/>
                    <img
                        src="https://salt.tikicdn.com/cache/w200/ts/banner/15/54/a3/bd225c53334b2efebd361ef54b490f04.png"/>
                </picture>
              </a>
              <a href="" className="center-brand">
                <picture className="webpimg-container">
                  <source type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w750/ts/banner/20/af/9d/05a7c59539c7790c2d6abd8c5b81eb7c.png.webp"/>
                    <img
                        src="https://salt.tikicdn.com/cache/w750/ts/banner/20/af/9d/05a7c59539c7790c2d6abd8c5b81eb7c.png"/>
                </picture>
              </a>
              <a href="" className="side-brand">
                <picture className="webpimg-container">
                  <source type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w200/ts/banner/da/12/bb/80c1a0ddb9836dcc5a60cddf54914ae8.png.webp"/>
                    <img
                        src="https://salt.tikicdn.com/cache/w200/ts/banner/da/12/bb/80c1a0ddb9836dcc5a60cddf54914ae8.png"/>
                </picture>
              </a>
            </div>
          </div>
          <div className="quicklink-container" >
            <div className="quicklink-wrap">
              <a href="" className="item">
                <picture className="webpimg-container">
                  <source type="image/webp"
                          srcSet="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                  <img src=""/>
                </picture>
                <span>Mua sắm có lời</span>
              </a>
              <a href="" className="item">
                <picture className="webpimg-container">
                  <source type="image/webp"
                          srcSet="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                  <img src=""/>
                </picture>
                <span>Siêu sale 7.7</span>
              </a>
              <a href="" className="item">
                <picture className="webpimg-container">
                  <source type="image/webp"
                          srcSet="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                  <img src=""/>
                </picture>
                <span>Đi chợ siêu tốc</span>
              </a>
              <a href="" className="item">
                <picture className="webpimg-container">
                  <source type="image/webp"
                          srcSet="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                  <img src="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                </picture>
                <span>Đóng tiền, nạp thẻ</span>
              </a>
              <a href="" className="item">
                <picture className="webpimg-container">
                  <source type="image/webp"
                          srcSet="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                  <img src="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                </picture>
                <span>Mua bán ASA/XU</span>
              </a>
              <a href="" className="item">
                <picture className="webpimg-container">
                  <source type="image/webp"
                          srcSet="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                  <img src="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                </picture>
                <span>Mã giảm giá</span>
              </a>
              <a href="" className="item">
                <picture className="webpimg-container">
                  <source type="image/webp"
                          srcSet="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                  <img src="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                </picture>
                <span>Bảo hiểm Tiki360</span>
              </a>
              <a href="" className="item">
                <picture className="webpimg-container">
                  <source type="image/webp"
                          srcSet="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                  <img src="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                </picture>
                <span>Giảm đến 50%</span>
              </a>
              <a href="" className="item">
                <picture className="webpimg-container">
                  <source type="image/webp"
                          srcSet="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                  <img src="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                </picture>
                <span>Hoàn tiền 15%</span>
              </a>
              <a href="" className="item">
                <picture className="webpimg-container">
                  <source type="image/webp"
                          srcSet="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                  <img src="https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif"/>
                </picture>
                <span>Ưu đãi thanh toán</span>
              </a>
            </div>
          </div>
          <div className="Suggestion-container">
            <div className="header">
              <h2>Gợi Ý Hôm Nay</h2>
            </div>
            <div className="style-infinite-scroll">
              <div className="content">
                <a href="">
                  <div className="flex-y">
                    <div className="thumbnail">
                      <img src="weqwe" />
                    </div>
                    <div className="info">
                      <h3>Thùng 24 Lon Nước Giải Khát
                        Coca-Cola vị Nguyên Bản Original 320ml1x24</h3>
                      <div className="price-discount has-discount">
                        <div className="price-discount__price">210.000 ₫</div>
                        <div className="price-discount__discount">
                          -13%
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="flex-y">
                    <div className="thumbnail">
                      <img src="weqwe" />
                    </div>
                    <div className="info">
                      <h3>Thùng 24 Lon Nước Giải Khát
                        Coca-Cola vị Nguyên Bản Original 320ml1x24</h3>
                      <div className="price-discount has-discount">
                        <div className="price-discount__price">210.000 ₫</div>
                        <div className="price-discount__discount">
                          -13%
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="flex-y">
                    <div className="thumbnail">
                      <img src="weqwe" />
                    </div>
                    <div className="info">
                      <h3>Thùng 24 Lon Nước Giải Khát
                        Coca-Cola vị Nguyên Bản Original 320ml1x24</h3>
                      <div className="price-discount has-discount">
                        <div className="price-discount__price">210.000 ₫</div>
                        <div className="price-discount__discount">
                          -13%
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="flex-y">
                    <div className="thumbnail">
                      <img src="weqwe" />
                    </div>
                    <div className="info">
                      <h3>Thùng 24 Lon Nước Giải Khát
                        Coca-Cola vị Nguyên Bản Original 320ml1x24</h3>
                      <div className="price-discount has-discount">
                        <div className="price-discount__price">210.000 ₫</div>
                        <div className="price-discount__discount">
                          -13%
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;
