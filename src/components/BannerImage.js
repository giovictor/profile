import React, { Component } from 'react';

class BannerImage extends Component {
    render() {
        return (
            <div className="banner-image">
                <img src={this.props.bannerimg} id={this.props.id} alt="name"/>
            </div>
        );
    }
}

export default BannerImage;