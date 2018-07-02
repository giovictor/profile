import React, {Component} from 'react';

class StarRating extends Component {
    render() {
        let starredratings = [];
        if(this.props.starred>=1) {
            for(var i=1;i<=this.props.starred;i++) {
                starredratings.push(<span key={i} className="fas fa-star starrating checked"></span>);
            }
        } 
        
        let unstarredratings = [];
        if(this.props.unstarred>=1) {
            for(var j=1;j<=this.props.unstarred;j++) {
                unstarredratings.push(<span key={j} className="fas fa-star starrating unchecked"></span>);
            }
        }

        return (
            <div className="col-md-3 skill">
                <h4>{this.props.weblang} <span><i className={this.props.icon}></i></span></h4>
                {starredratings}{unstarredratings}
            </div>
        );
    }
}

export default StarRating;