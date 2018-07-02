import React, { Component } from 'react';

import namebanner from '../images/namebanner.png';
import webdeveloperbanner from '../images/webdeveloperbanner.png';
import gioimage from '../images/gioimage.png';
import BannerImage from './BannerImage';
class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <div className="bannerImages">
          <BannerImage bannerimg={namebanner} id="nameimg"/>  
          <BannerImage bannerimg={webdeveloperbanner} id="positionimg"/>  
          <BannerImage bannerimg={gioimage} id="image"/>  
        </div>
      </div>
    )
  }
}


export default Banner;
