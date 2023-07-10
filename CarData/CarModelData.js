import React, {Component} from 'react';
import Model from '../CarsComponent/Model/Model';
import CarsComponent from '../CarsComponent/CarsComponent';
import { GettingText } from '../CarsComponent/SlideMake/SlideMake';

class CarModelData extends Component {
    constructor() {
        super();
        this.state = {
          carModelDataView: 'home'
        }
      }
      
      onCarModelDataChange = (carModelDataView) => {
        this.setState({carModelDataView: carModelDataView});
      }

    render() {

        const cars = [
            {
                name: "HURACAN",
                image: "huracan.png",
                logo: "lamborghini_logo.png"
            },
            {
                name: "PISTA 488",
                image: "Ferrari.png",
                logo: "ferrari.svg"
            },
            {
                name: "REGERA",
                image: "regera.png",
                logo: "koenigsegg-logo.png"

            },
            {
                name: "DB 11",
                image: "db11.png",
                logo: "astonMartin.svg"
            },
            {
                name: "BMW i8",
                image: "bmwi8.png",
                logo: "i8.svg"
            },
            {
                name: "CX -75",
                image: "jaguar.png",
                logo: "Jaguar.svg"
            },
            {
                name: "PORSCHE 911",
                image: "porsche.png",
                logo: "porsche.svg"
            },
            {
                name: "NISSAN GTR",
                image: "nissanGTR.png",
                logo: "Nissan.svg"
            },
            {
                name: "MUSTANG",
                image: "FordMustangShelby.png",
                logo: "fordLogo.png"
            },
            {
                name: "DIVO",
                image: "bugatti.png",
                logo: "Bugatti.svg"
            },
            {
                name: "AMG GT",
                image: "mercedes.png",
                logo: "mercedes.svg"
            },
            {
                name: "AUDI R8",
                image: "audi.png",
                logo: "audi.svg"
            },
            {
                name: "CONTINENTAL",
                image: "bentley.png",
                logo: "bentleylogo.svg"
            },
            {
                name: "DAWN",
                image: "rollsRoyce.png",
                logo: "rollsRoyce.svg"
            },
            {
                name: "CORVETTE",
                image: "Chevrolet.png",
                logo: "CHEVROLET.svg"
            },
            {
                name: "MAZDA LM55",
                image: "Mazda.png",
                logo: "MAZDA.svg"
            },
            {
                name: "ROADSTER",
                image: "tesla.png",
                logo: "tesla.svg"
            },
            {
                name: "HUAYRA",
                image: "pagani.png",
                logo: "Pagani.svg"
            },
            {
                name: "720s",
                image: "mclaren720s.png",
                logo: "mclaren.svg"
            },
        ]
        let paraText = GettingText();
        console.log(paraText);
        let name, image, color, logo;
        if (paraText === 'Lamborghini') {
            name = cars[0].name;
            image = cars[0].image;
            logo = cars[0].logo;
            color = "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)";

        } else if (paraText === 'Ferrari') {
            name = cars[1].name;
            image = cars[1].image;
            logo = cars[1].logo;
            color = "linear-gradient(-60deg, #D31027 0%, #EA384D 100%)";

        } else if (paraText === 'Koenigsegg') {
            name = cars[2].name;
            image = cars[2].image;
            logo = cars[2].logo;
            color = "linear-gradient(to top, #ff0844 0%, #ffb199 100%)";

        } else if (paraText === 'Aston Martin') {
            name = cars[3].name;
            image = cars[3].image;
            logo = cars[3].logo;
            color = "linear-gradient(-60deg, #e52d27 0%, #b31217 100%)";

        } else if (paraText === 'BMW') {
            name = cars[4].name;
            image = cars[4].image;
            logo = cars[4].logo;
            color = "linear-gradient(-60deg, #757F9A 0%, #D7DDE8 100%)";

        } else if (paraText === 'Jaguar') {
            name = cars[5].name;
            image = cars[5].image;
            logo = cars[5].logo;
            color = "linear-gradient(-60deg, #C85841 0%, #F09819 100%)";

        } else if (paraText === 'Porsche') {
            name = cars[6].name;
            image = cars[6].image;
            logo = cars[6].logo;
            color = "linear-gradient(-60deg, #B22222 0%, #FF0000 100%)";

        } else if (paraText === 'Nissan') {
            name = cars[7].name;
            image = cars[7].image;
            logo = cars[7].logo;
            color = "linear-gradient(-60deg, #283048 0%, #859398 100%)";

        } else if (paraText === 'Ford') {
            name = cars[8].name;
            image = cars[8].image;
            logo = cars[8].logo;
            color = "linear-gradient(to top, #D31027 0%, #EA384D 100%)";
            
        } else if (paraText === 'Bugatti') {
            name = cars[9].name;
            image = cars[9].image;
            logo = cars[9].logo;
            color = "linear-gradient(to top, #0E1318 0%, #007499 100%)";

        } else if (paraText === 'Mercedes') {
            name = cars[10].name;
            image = cars[10].image;
            logo = cars[10].logo;
            color = "linear-gradient(-60deg, #FCFDFE 0%, #64EC77 100%)";

        } else if (paraText === 'Audi') {
            name = cars[11].name;
            image = cars[11].image;
            logo = cars[11].logo;
            color = "linear-gradient(-60deg, #509A84 0%, #008912 100%)";

        } else if (paraText === 'Bentley') {
            name = cars[12].name;
            image = cars[12].image;
            logo = cars[12].logo;
            color = "linear-gradient(-60deg, #F11009 0%, #D52348 100%)";

        } else if (paraText === 'Rolls Royces') {
            name = cars[13].name;
            image = cars[13].image;
            logo = cars[13].logo;
            color = "linear-gradient(-60deg, #950197 0%, #5738A0 100%)";

        } else if (paraText === 'Chevrolet') {
            name = cars[14].name;
            image = cars[14].image;
            logo = cars[14].logo;
            color = "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)";

        } else if (paraText === 'Mazda') {
            name = cars[15].name;
            image = cars[15].image;
            logo = cars[15].logo;
            color = "linear-gradient(-60deg, #8D9AA3 0%, #D7DAD2 100%)";

        } else if (paraText === 'Tesla') {
            name = cars[16].name;
            image = cars[16].image;
            logo = cars[16].logo;
            color = "linear-gradient(-60deg, #EDD3D6 0%, #B7355A 100%)";

        } else if (paraText === 'Pagani') {
            name = cars[17].name;
            image = cars[17].image;
            logo = cars[17].logo;
            color = "linear-gradient(-60deg, #DBCABC 0%, #6B5C4A 100%)";

        } else if (paraText === 'McLaren') {
            name = cars[18].name;
            image = cars[18].image;
            logo = cars[18].logo;
            color = "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)";

        } else {
            console.log("Error in the cars name!!!");
        }

        return(
            <div>
                {
                    this.state.carModelDataView === 'home'
                    ?
                    <div>
                        <CarsComponent
                            name={name}
                            image={image}
                            color={color}
                            logo={logo}
                            onCarDataChange={this.props.onCarDataChange}
                            onCarModelDataChange={this.onCarModelDataChange}
                        />
                    </div>
                    :
                    <div>
                        <Model
                        onRouteCarDetail={this.props.onRouteCarDetail} 
                        onCarModelDataChange={this.onCarModelDataChange}/>
                    </div>
                }
            </div>
        );
    }
}

export default CarModelData;