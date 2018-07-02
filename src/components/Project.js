import React, {Component} from 'react';

class Project extends Component {
    render() {
        return (
            <div className="col-md-4 portfolios">
                <a href={this.props.link} target="_blank"><img src={this.props.image} alt={this.props.alt}/></a>
                <a href={this.props.link} target="_blank">{this.props.project}</a>
            </div>
        );
    }
}
export default Project;