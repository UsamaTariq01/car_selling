import React, {Component} from 'react';
import './SlideMake.css';

let para_text;

class SlideMake extends Component {

    getText = (id) => {
        para_text = document.getElementById(id).innerHTML;
        this.props.onCarDataChange('nothome')
    }

    render() {

        return(
            <div>
                <div className="slide-make-main-container">
                    <div className="silde-make-header">
                        <p>Make</p>
                        <p onClick={() => this.props.onNavSlideChange('home')}>X</p>
                    </div>
                    <div className="silde-make-car-list-div">
                        <ul className="silde-make-car-ul">
                            
                            <li 
                                id="1" 
                                onClick={() => this.getText(1)}
                                className="slide-make-car-list">Lamborghini
                            </li>

                            <li
                                id="2"
                                onClick={() => this.getText(2)}
                                className="slide-make-car-list">Ferrari
                            </li>

                            <li 
                                id="3"
                                onClick={() => this.getText(3)}
                                className="slide-make-car-list">Koenigsegg
                            </li>

                            <li 
                                id="4"
                                onClick={() => this.getText(4)}
                                className="slide-make-car-list">Aston Martin
                            </li>

                            <li 
                                id="5"
                                onClick={() => this.getText(5)}
                                className="slide-make-car-list">BMW
                            </li>

                            <li 
                                id="6"
                                onClick={() => this.getText(6)}
                                className="slide-make-car-list">Jaguar    
                            </li>

                            <li 
                                id="7"
                                onClick={() => this.getText(7)}
                                className="slide-make-car-list">Porsche
                            </li>

                            <li
                                id="8"
                                onClick={() => this.getText(8)}
                                className="slide-make-car-list">Nissan
                            </li>

                            <li
                                id="9"
                                onClick={() => this.getText(9)}
                                className="slide-make-car-list">Ford
                            </li>

                            <li 
                                id="10"
                                onClick={() => this.getText(10)}
                                className="slide-make-car-list">Bugatti
                            </li>

                            <li 
                                id="11"
                                onClick={() => this.getText(11)}
                                className="slide-make-car-list">Mercedes
                            </li>

                            <li 
                                id="12"
                                onClick={() => this.getText(12)}
                                className="slide-make-car-list">Audi
                            </li>

                            <li 
                                id="13"
                                onClick={() => this.getText(13)}
                                className="slide-make-car-list">Bentley
                            </li>

                            <li 
                                id="14"
                                onClick={() => this.getText(14)}
                                className="slide-make-car-list">Rolls Royces
                            </li>

                            <li 
                                id="15"
                                onClick={() => this.getText(15)}
                                className="slide-make-car-list">Chevrolet
                            </li>

                            <li 
                                id="16"
                                onClick={() => this.getText(16)}
                                className="slide-make-car-list">Mazda
                            </li>

                            <li 
                                id="17"
                                onClick={() => this.getText(17)}
                                className="slide-make-car-list">Tesla
                            </li>

                            <li 
                                id="18"
                                onClick={() => this.getText(18)}
                                className="slide-make-car-list">Pagani
                            </li>

                            <li 
                                id="19"
                                onClick={() => this.getText(19)}
                                className="slide-make-car-list">McLaren
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    
        );
    }
}

export const GettingText = () => {
    return (
        para_text
    )
}

export default SlideMake;
