import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='home-page'>
        <header id="main-header" className="style-header bg-primary">
          <div className="header-container container-fluid">
            <div className="header-wrap d-flex justify-content-around">
              <a href="/" className="logo-menu col-lg-2 mt-3">
                <img src={require('./img/header/tiki.png')} alt=''></img>
              </a>
              <div className="FormSearch d-flex flex-row col-lg-7 mt-3">
                <input type="text" value="" className="FormSearch__input"
                  placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."/>
                <button id="searchbar_button" className="FormSearch__button">
                  <img className="iconSearch mr-2" src={require('./img/header/search.png')}/>Tìm Kiếm
                </button>
              </div>
              <a href="" className="Cart-container col-lg-2 d-flex flex-row justify-content-end">
                <div className="Cart-wrapper">
                  <img className="Cart-icon" src={require('./img/header/cart.png')}></img>
                  <span className="Cart-item-quantity">0</span>
                </div>
                <span className="Cart-text mt-2">Giỏ Hàng</span>
              </a>
            </div>
          </div>
        </header>
        <main>
          <div className="contain container-fluid mb-3">
            <div className="banner-wrapper row justify-content-around">
              <div className="col-xs-12 col-md-8 plr-0" id="banner-1">
                <img className="img" src={require('./img/banner/banner1.png')} alt='' />
              </div>
              <div className="d-sm-none d-md-block col-md-4 plr-0 pl-2" id="banner-2">
                <img className="img" src={require('./img/banner/banner2.png')} alt='' />
              </div>
            </div>
              <div className="banner-wrapper row mb-2">
                <div id="home_deal" className="d-sm-none d-md-block col-md-7 plr-0">
                  <div className="header row pt-3 pl-3 pr-3">
                    <div className="header-left">
                      <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" alt="flash deal"/>
                      <img width="21" src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
                           alt="flash deal" />
                      <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="flash deal" />
                    </div>
                    <div className="navigation">
                      <a href="">Xem thêm</a>
                    </div>
                  </div>
                  <div className="body">
                    <div className="list-deal row">
                      <a href="" className="deal d-flex flex-column w-1o5" data-index="0">
                        <img className="img" src={require('./img/slicer-sale/slicer_sale1.jpg')} alt='' />
                        <div className="price-text">
                          <span className="price-discount__price">99.000 đ</span>
                          <span className="price-discount__discount">-80%</span>
                        </div>
                      </a>
                      <a href="" className="deal d-flex flex-column w-1o5" data-index="1">
                        <img className="img" src={require('./img/slicer-sale/slicer_sale2.jpg')} alt='' />
                        <div className="price-text">
                          <span className="price-discount__price">99.000 đ</span>
                          <span className="price-discount__discount">-80%</span>
                        </div>
                      </a>
                      <a href="" className="deal d-flex flex-column w-1o5" data-index="2">
                        <img className="img" src={require('./img/slicer-sale/slicer_sale3.jpg')} alt='' />
                        <div className="price-text">
                          <span className="price-discount__price">99.000 đ</span>
                          <span className="price-discount__discount">-80%</span>
                        </div>
                      </a>
                      <a href="" className="deal d-flex flex-column w-1o5" data-index="3">
                        <img className="img" src={require('./img/slicer-sale/slicer_sale4.jpg')} alt='' />
                        <div className="price-text">
                          <span className="price-discount__price">99.000 đ</span>
                          <span className="price-discount__discount">-80%</span>
                        </div>
                      </a>
                      <a href="" className="deal d-flex flex-column w-1o5" data-index="4">
                        <img className="img" src={require('./img/slicer-sale/slicer_sale5.jpg')} alt='' />
                        <div className="price-text">
                          <span className="price-discount__price">99.000 đ</span>
                          <span className="price-discount__discount">-80%</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="RewardHub-wrapper-smaller col-lg-5 plr-0 pl-2">
                  <div className="slick-slider banners-reward h-100">
                    <div className="h-100" id="banner-reward">
                      <img className="img h-100" src={require('./img/banner/banner4.png')} alt='' />
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="Ad-wrap row">
              <a href="" className="col-lg-2 plr-0">
                <img className="img" src={require('./img/ad/ad_lg1.png')} alt='' />
              </a>
              <a href="" className="col-lg-8">
                <img className="img" src={require('./img/ad/ad_lg2.png')} alt='' />
              </a>
              <a href="" className="col-lg-2 plr-0">
                <img className="img" src={require('./img/ad/ad_lg3.png')} alt='' />
              </a>
            </div>
          </div>
          <div className="container-fluid mt-2">
            <div className="quicklink-wrap row pt-3 pb-3 justify-content-between">
              <a href="" className="item col-lg-1 plr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink1.gif')} alt='' />
                <span>Mua sắm có lời</span>
              </a>
              <a href="" className="item col-lg-1 plr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink2.png')} alt='' />
                <span>Siêu sale 7.7</span>
              </a>
              <a href="" className="item col-lg-1 plr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink3.png')} alt='' />
                <span>Đi chợ siêu tốc</span>
              </a>
              <a href="" className="item col-lg-1 plr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink4.png')} alt='' />
                <span>Đóng tiền, nạp thẻ</span>
              </a>
              <a href="" className="item col-lg-1 plr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink5.png')} alt='' />
                <span>Mua bán ASA/XU</span>
              </a>
              <a href="" className="item col-lg-1 plr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink6.png')} alt='' />
                <span>Mã giảm giá</span>
              </a>
              <a href="" className="item col-lg-1 plr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink7.png')} alt='' />
                <span>Bảo hiểm Tiki360</span>
              </a>
              <a href="" className="item col-lg-1 plr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink8.png')} alt='' />
                <span>Giảm đến 50%</span>
              </a>
              <a href="" className="item col-lg-1 plr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink9.png')} alt='' />
                <span>Hoàn tiền 15%</span>
              </a>
              <a href="" className="item col-lg-1 plr-0 d-flex flex-column align-items-center">
                <img src={require('./img/qlink/qlink10.png')} alt='' />
                <span>Ưu đãi thanh toán</span>
              </a>
            </div>
          </div>
          <div className="container-fluid mt-4">
            <div className="suggestion-wrap">
              <div className="header">
                <h2>Gợi Ý Hôm Nay</h2>
              </div>
              <div className="style-infinite-scroll bg-white">
                <div className="content row">
                  <a className="col-lg-2 plr-0" href="">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest1.png')} alt='' />
                      </div>
                      <div className="info">
                        <h3>Thùng 24 Lon Nước Giải Khát
                          Coca-Cola vị Nguyên Bản Original 320ml1x24</h3>
                        <div className="price-discount has-discount">
                          <div className="price-discount__price">210.000 ₫</div>
                          <div className="price-discount__discount">-13</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="col-lg-2 plr-0" href="">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest2.jpg')} alt='' />
                      </div>
                      <div className="info">
                        <h3>Truyện tranh One Piece</h3>
                        <div className="price-discount has-discount">
                          <div className="price-discount__price">60.000 ₫</div>
                          <div className="price-discount__discount">-13%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="col-lg-2 plr-0" href="">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest3.jpg')} alt='' />
                      </div>
                      <div className="info">
                        <h3>Truyện tranh Tokyo Revengers</h3>
                        <div className="price-discount has-discount">
                          <div className="price-discount__price">50.000 ₫</div>
                          <div className="price-discount__discount">-13%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="col-lg-2 plr-0" href="">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest4.jpg')} alt='' />
                      </div>
                      <div className="info">
                        <h3>Iphone 12 Pro</h3>
                        <div className="price-discount has-discount">
                          <div className="price-discount__price">10.500.000 ₫</div>
                          <div className="price-discount__discount">-13%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="col-lg-2 plr-0" href="">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest5.jpg')} alt='' />
                      </div>
                      <div className="info">
                        <h3>Iphone 7 màu</h3>
                        <div className="price-discount has-discount">
                          <div className="price-discount__price">70.000 ₫</div>
                          <div className="price-discount__discount">-13%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="col-lg-2 plr-0" href="">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest6.png')} alt='' />
                      </div>
                      <div className="info">
                        <h3>Giày da siêu mỏng cánh giá siêu hời</h3>
                        <div className="price-discount has-discount">
                          <div className="price-discount__price">20.100.000 ₫</div>
                          <div className="price-discount__discount">-13%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="col-lg-2 plr-0" href="">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest7.jpg')} alt='' />
                      </div>
                      <div className="info">
                        <h3>Thùng 24 Lon Nước Giải Khát
                          Coca-Cola vị Nguyên Bản Original 320ml1x24</h3>
                        <div className="price-discount has-discount">
                          <div className="price-discount__price">210.000 ₫</div>
                          <div className="price-discount__discount">-13%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="col-lg-2 plr-0" href="">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest8.jpg')} alt='' />
                      </div>
                      <div className="info">
                        <h3>Chai dầu xả Dove tặng kèm bông tăm xỉa răng</h3>
                        <div className="price-discount has-discount">
                          <div className="price-discount__price">50.000 ₫</div>
                          <div className="price-discount__discount">-13%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="col-lg-2 plr-0" href="">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest9.png')} alt='' />
                      </div>
                      <div className="info">
                        <h3>Sữa rửa mặt Nvidia tặng kèm túi vải sành điệu</h3>
                        <div className="price-discount has-discount">
                          <div className="price-discount__price">210.000 ₫</div>
                          <div className="price-discount__discount">-13%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="col-lg-2 plr-0" href="">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest10.jpg')} alt='' />
                      </div>
                      <div className="info">
                        <h3>Dầu gội Clear chai lọ tặng kèm tăm xỉa răng</h3>
                        <div className="price-discount has-discount">
                          <div className="price-discount__price">50.000 ₫</div>
                          <div className="price-discount__discount">-13%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="col-lg-2 plr-0" href="">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest11.jpg')} alt='' />
                      </div>
                      <div className="info">
                        <h3>Dầu gội CLEAR MEN chuẩn nam tính chai màu đen</h3>
                        <div className="price-discount has-discount">
                          <div className="price-discount__price">40.000 ₫</div>
                          <div className="price-discount__discount">-13%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="col-lg-2 plr-0" href="">
                    <div className="flex-y">
                      <div className="thumbnail">
                        <img src={require('./img/suggest/suggest12.jpg')} alt='' />
                      </div>
                      <div className="info">
                        <h3>2 Chai sữa tắm Johnson Baby tặng kèm tăm xỉa răng</h3>
                        <div className="price-discount has-discount">
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
