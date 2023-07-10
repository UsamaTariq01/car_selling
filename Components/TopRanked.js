import React, {Component} from 'react';
import './TopRanked.css';

class TopRanked extends Component {
    render() {
        return (
            <div>
                <h1 className="top-ranked-h">TOP RATED</h1>

                <div className="top-ranked-img">
                    <img width='20%' height='30%'  src={require('../Image/Koenigsegg_Regera_side.jpg')} alt="regra"/>
                    <img width='20%' height='30%'  src={require('../Image/koenigsegg-agera-rs.jpg')} alt="regra"/>
                    
                </div>
                
                <div>
                    <h1 className="top-ranked-buy-now">BUY NOW</h1>
                </div>
            </div>
        );
    }
}

export default TopRanked;