import React from 'react';
import './Footer.css'

function Footer() {

  return (
    <div>
      <div className="d-flex justify-content-center">
          <img src={require("../../asset/images/index/footerold.png")} alt='footerLogo' style={{width:'100%'}}/>
      </div>
      <div className="footer">
          <br />
          <div className="container d-flex justify-content-between">
              <div className="d-flex flex-column justify-content-space-evenly">
                  <p><i className="fa-solid fa-phone"></i> {"電話: 04-229374948"}</p>
                  <p><i className="fa-solid fa-house"></i> {"地址: 408台中市南屯區公益路二段51號18樓"}</p>
                  <p><i className="fa-solid fa-envelope"></i> {"電子信箱: goodcare@gmail.com"}</p>
                  <p><i className="fas fa-clock"></i> {"營業時間: 09:00-18:00"}</p>
              </div>
              <div className="d-flex flex-column">
                  <div><img src={require("../../asset/images/index/footerlogo.png")} alt='footerLogo'/></div>
                  <br/>
                  <div className="d-flex justify-content-between">
                      <a href="https://www.facebook.com/mohw.gov.tw/" target="_blank" rel="noreferrer">
                          <h1><i className="fa-brands fa-facebook text-white"></i></h1>
                      </a>
                      <a href="https://twitter.com/MOHW_Taiwan" target="_blank" rel="noreferrer">
                          <h1><i className="fa-brands fa-x-twitter text-white"></i></h1>
                      </a>
                      <a href="https://page.line.me/mohw" target="_blank" rel="noreferrer">
                          <h1><i className="fa-brands fa-line text-white"></i></h1>
                      </a>
                      <a href="https://www.youtube.com/watch?v=hxgI7g-cl4Q" target="_blank" rel="noreferrer">
                          <h1> <i className="fa-brands fa-youtube text-white"></i></h1>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;
