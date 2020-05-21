import React, { Component } from "react";
import axios from 'axios';

import PokemonCard from "./PokemonCard";

export default class PokemonList extends Component {

    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/?limit=30',
        pokemon: null,
        next: null,
        prev: null
    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ 
            pokemon: res.data['results'],
            next: res.data['next']
            })
    }
    

    render() {
        console.log(this.state.next)
        return (
            <React.Fragment>
                {this.state.pokemon ? (
                    <div className="row">
                    {this.state.pokemon.map(pokemon => (
                        <PokemonCard 
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                        />
                    ))}
                </div>
            ) : (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-dark">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
            </ React.Fragment>
        )
    }
}