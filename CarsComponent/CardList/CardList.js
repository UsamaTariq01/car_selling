import React, {Component} from 'react';
import Card from '../Card';

class CardList extends Component {
    constructor() {
        super();
        this.state = {cars: []}
    }

    componentDidMount() {
        let url = "http://localhost:3001/cardisplay?status=all";

        fetch(url).then(res => res.json())
        .then(cars => this.setState({cars: cars}))
        .catch(err => alert(err))
    }

    render() {
        return(
            <div className="card-main-container">
                {
                    this.state.cars.map((car, index) => {
                        return (
                            <Card
                                key={index}
                                car={car}
                                onRouteCarDetail={this.props.onRouteCarDetail}
                            />
                        )
                    })
                }
            </div>
        );
    }
}



export default CardList;