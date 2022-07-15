import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='home-page'>
        <header id="main-header" className="style-header">
          <div className="header-container container-fluid">
            <div className="header-wrap d-flex flex-wrap justify-content-around">
              <a href="#freeship" className="order-0 d-lg-none col-4 mt-3">
                <img className="logo-freeship" src={require('./img/header/freeship.png')} alt=''></img>
              </a>
              <a href="/" className="logo-menu order-1 order-lg-0 col-4 col-lg-2 mt-3">
                <img src={require('./img/header/tiki.png')} alt=''></img>
              </a>
              <div className="FormSearch order-3 order-lg-2 d-flex flex-row col-12 col-lg-7 mt-2 mt-lg-3 bg-white">
                <img className="iconSearch d-lg-none ml-2" src={require('./img/header/search_mobile.png')}/>
                <input type="text" value="" className="FormSearch__input ml-1 ml-lg-2"
                  placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."/>
                <button id="searchbar_button" className="FormSearch__button d-none d-lg-block">
                  <img className="iconSearch mr-2" src={require('./img/header/search.png')}/>Tìm Kiếm
                </button>
              </div>
              <a href="#Cart" className="Cart-container order-2 order-lg-3 col-4 col-lg-2 d-flex flex-row justify-content-end">
                <div className="Cart-wrapper">
                  <img className="Cart-icon" src={require('./img/header/cart.png')}></img>
                  <span className="Cart-item-quantity">0</span>
                </div>
                <span className="Cart-text mt-2 d-none d-lg-block">Giỏ Hàng</span>
              </a>
            </div>
          </div>
        </header>
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
                      <a href="#addtocart" className="deal d-flex flex-column w-1o5" data-index="0">
                        <img className="img" src={require('./img/slicer-sale/slicer_sale1.jpg')} alt='' />
                        <div className="price-text">
                          <span className="price-discount__price">99.000 đ</span>
                          <span className="price-discount__discount">-80%</span>
                        </div>
                      </a>
                      <a href="#addtocart" className="deal d-flex flex-column w-1o5" data-index="1">
                        <img className="img" src={require('./img/slicer-sale/slicer_sale2.jpg')} alt='' />
                        <div className="price-text">
                          <span className="price-discount__price">99.000 đ</span>
                          <span className="price-discount__discount">-80%</span>
                        </div>
                      </a>
                      <a href="#addtocart" className="deal d-flex flex-column w-1o5" data-index="2">
                        <img className="img" src={require('./img/slicer-sale/slicer_sale3.jpg')} alt='' />
                        <div className="price-text">
                          <span className="price-discount__price">99.000 đ</span>
                          <span className="price-discount__discount">-80%</span>
                        </div>
                      </a>
                      <a href="#addtocart" className="deal d-flex flex-column w-1o5" data-index="3">
                        <img className="img" src={require('./img/slicer-sale/slicer_sale4.jpg')} alt='' />
                        <div className="price-text">
                          <span className="price-discount__price">99.000 đ</span>
                          <span className="price-discount__discount">-80%</span>
                        </div>
                      </a>
                      <a href="#addtocart" className="deal d-flex flex-column w-1o5" data-index="4">
                        <img className="img" src={require('./img/slicer-sale/slicer_sale5.jpg')} alt='' />
                        <div className="price-text">
                          <span className="price-discount__price">99.000 đ</span>
                          <span className="price-discount__discount">-80%</span>
                        </div>
                      </a>
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
                  <a className="col-6 col-lg-2 p-2" href="#addtocart">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest1.png')} alt='' />
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
                  <a className="col-6 col-lg-2 p-2" href="#addtocart">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest2.jpg')} alt='' />
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
                  <a className="col-6 col-lg-2 p-2" href="#addtocart">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest3.jpg')} alt='' />
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
                  <a className="col-6 col-lg-2 p-2" href="#addtocart">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest4.jpg')} alt='' />
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
                  <a className="col-6 col-lg-2 p-2" href="#addtocart">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest5.jpg')} alt='' />
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
                  <a className="col-6 col-lg-2 p-2" href="#addtocart">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest6.png')} alt='' />
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
                  <a className="col-6 col-lg-2 p-2" href="#addtocart">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest7.jpg')} alt='' />
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
                  <a className="col-6 col-lg-2 p-2" href="#addtocart">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest8.jpg')} alt='' />
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
                  <a className="col-6 col-lg-2 p-2" href="#addtocart">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest9.png')} alt='' />
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
                  <a className="col-6 col-lg-2 p-2" href="#addtocart">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest10.jpg')} alt='' />
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
                  <a className="col-6 col-lg-2 p-2" href="#addtocart">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest11.jpg')} alt='' />
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
                  <a className="col-6 col-lg-2 p-2" href="#addtocart">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest12.jpg')} alt='' />
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
