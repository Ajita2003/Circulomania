import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>WHY ECO THRIFT?</p>
          </div>
          <div className="list">
            <ul>
              <li>LESS RESOURCE CONSUMPTION</li>
              <li>LESS CHEMICAL POLLUTION</li>
              <li>INSPIRES GREEN LIVING</li>
              <li>FEWER THINGS ARE THROWN AWAY</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              
              <li>easy to sell and buy things</li>
              <li>keeps track of your history</li>
              <li>user friendly!</li>
            </ul>
          </div>
        </div>
       
      </div>
      <div className="footer">
        <p>Rent,sell and reuse with Circulomania's Thrift Caring Corner</p>
        
      </div>
    </div>
  );
}

export default Footer;
