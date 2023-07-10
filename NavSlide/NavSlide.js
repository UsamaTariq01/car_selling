import React, {Component} from 'react';
import Navbar from '../Components/NavBar';
import SlideMake from '../CarsComponent/SlideMake/SlideMake';
import { GettingSignedInUser } from '../SignIn/SignIn';

class NavSlide extends Component {
    constructor() {
        super();
        this.state = {
          slideview: 'home'
        }
      }
      
    onNavSlideChange = (slideview) => {
        this.setState({slideview: slideview});
    }
    
    render(){

        let obj = GettingSignedInUser();

        return(
            <div>
            {
                this.state.slideview === 'home'
                ?
                    <div>
                        <Navbar
                            user_name={typeof(obj) !== "undefined" ? obj.USERNAME : "Signin"}
                            searchChange={this.props.onSearchChange}
                            onPathSignInChange={this.props.onPathSignInChange} 
                            onNavSlideChange={this.onNavSlideChange}
                        />
                    </div>
                :
                <div>
                    <Navbar 
                        onPathSignInChange={this.props.onPathSignInChange}
                    />
                    <SlideMake
                        onCarDataChange={this.props.onCarDataChange}
                        onNavSlideChange={this.onNavSlideChange}/>
                </div>
            }
            </div>
        );
    }
}

export default NavSlide;