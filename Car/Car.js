import React, {Component} from 'react';
import './Car.css';
import TopRanked from '../Components/TopRanked';
import NavSlide from '../NavSlide/NavSlide';
import CardList from '../CarsComponent/CardList/CardList';

class Car extends Component {
    constructor() {
        super();
        this.state = {
            searchfield: '',
            cars: []
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {

        const { cars, searchfield } = this.state;
        const filteredCars = cars.filter(car => {
            return car.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return(

            <div>
                <NavSlide 
                    onPathSignInChange={this.props.onPathSignInChange}
                    onCarDataChange={this.props.onCarDataChange}
                />
                
                <div>
                    <div className="main-webpage-car-desc-div">
                        <h1 className="main-webpage-car">The Agera RS takes FIVE speed records in Nevada</h1>
                        <strong className="main-webpage-desc">THE FASTEST CAR IN THE WORLD</strong>
                        <img className="main-webpage-img" alt="lamborghini" src={require(`../Image/koenigsegg.jpg`)} />
                    </div>
                </div>
    
                <div className="container">
                    <a href="localhost:3000"><span className="scroll"></span></a>
                    <p className="word">scroll down</p>
                </div>
    
                <TopRanked />
                
                <CardList
                    carsData={filteredCars} 
                    onRouteCarDetail={this.props.onRouteCarDetail}
                />
            </div>
        );
    }
}

export default Car;