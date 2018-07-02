import React, {Component} from 'react';
import StarRating from './StarRating';
class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="row" id="techskills">
                    <div className="col-md-4">
                        <div id="borderleft"></div>
                    </div>

                    <div className="col-md-4">
                        <h2>Technical Skills</h2>
                    </div>

                    <div className="col-md-4">
                        <div id="borderright"></div>
                    </div>
                </div>
                <div className="row">
                	<StarRating weblang="HTML" icon="fab fa-html5" starred="5" unstarred="0"/>
                    <StarRating weblang="CSS" icon="fab fa-css3-alt" starred="4" unstarred="1"/>
                    <StarRating weblang="JavaScript" icon="fab fa-js" starred="4" unstarred="1"/>
                    <StarRating weblang="PHP" icon="fab fa-php" starred="4" unstarred="1"/>
                    <StarRating weblang="Laravel" icon="fab fa-laravel" starred="4" unstarred="1"/>
                    <StarRating weblang="Sass" icon="fab fa-sass" starred="4" unstarred="1"/>
                    <StarRating weblang="Vue.js" icon="fab fa-vuejs" starred="3" unstarred="2"/>
                    <StarRating weblang="React" icon="fab fa-react" starred="3" unstarred="2"/>
                </div>
            </div>
        );
    }
}

export default Skills;