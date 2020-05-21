import React, { Component } from "react";
import axios from 'axios';

import PokemonCard from "./PokemonCard";

export default class PokemonList extends Component {

    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/?limit=40',
        pokemon: null,
        next: null,
        prev: null
    };

    async componentDidMount() {
        this._getPokemon()
    }

    async componentDidUpdate(prevProps, prevState) {
        if(prevState.url !== this.state.url){
            this._getPokemon()
        }
    }

    async _getPokemon() {
        const res = await axios.get(this.state.url);
        this.setState({ 
            pokemon: res.data['results'],
            next: res.data['next'],
            prev: res.data['previous']
        })
        window.scrollTo(0, 0)
    }

    render() {
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
            <div className="mb-4">
                {this.state.next ? (
                    <button type="button" className="btn btn-primary btn-lg btn-block"
                    onClick={() => {
                        this.setState({url: this.state.next})
                    }}>
                        Next
                    </button>
                ) : (null)
                }
                {this.state.prev ? (
                    <button type="button" className="btn btn-primary btn-lg btn-block"
                    onClick={() => {
                        this.setState({url: this.state.prev})
                    }}>
                        Previous
                    </button>
                ) : (null)
                }
            </div>
            </ React.Fragment>
        )
    }
}