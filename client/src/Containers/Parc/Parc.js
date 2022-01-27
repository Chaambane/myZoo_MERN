import React, {Component} from 'react';
import axios from 'axios';
import AnimalCard from './AnimalCard/AnimalCard';

class Parc extends Component {
    state = {
        dataAnimals: null
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/api/animals')
            .then(response => {
                console.log(response.data);
                this.setState({dataAnimals: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.dataAnimals &&  
                    this.state.dataAnimals.map(animal => {
                        return(
                            <div className="col-12 col-md-6 p-2" key={animal._id}>
                                <AnimalCard {...animal} />
                            </div>
                        )
                    })
                }
            </div>
        )
    };
}

export default Parc;