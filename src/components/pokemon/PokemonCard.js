import React, { Component } from 'react';

import styled from 'styled-components';

const Sprite = styled.img`
    width: 5em;
    heigth: 5em;
`;

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        toManyRequests: false
    };

    componentDidMount() {
        const {name, url} = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

        this.setState({
            name,
            imageUrl,
            pokemonIndex,
        })
    }

    render() {
        
        return (
            <div
            className='col-md-4 col-sm-6 mb-5'>
                <div className="card">
                    <h3 className="card-header">
                        {this.state.pokemonIndex}
                    </h3>
                    {this.state.imageLoading ? (
                        <div className="spinner-border mx-auto mt-2" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : null}
                    <Sprite className="card-img-top rounded mx-auto mt-2"
                    src={this.state.imageUrl}
                    onLoad={() => this.setState({ imageLoading: false })}
                    onError={() => this.setState({ toManyRequests: true })}
                    style={
                        this.state.toManyRequests 
                        ? {display: "none"} 
                        : this.state.imageLoading 
                        ? null 
                        : {display: "block"}
                    }
                    />
                    {this.state.toManyRequests ? (
                        <h6 className="mx-auto">
                            <span className="badge badge-pill badge-danger">To many requests</span>
                        </h6>
                    ) : null}
                    <div className="card-body mx-auto">
                        <h4 className="card-title">
                            {this.state.name
                            .toLowerCase()
                            .split(' ')
                            .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                            .join(' ')}
                            </h4>
                    </div>
                </div>
            </div>
        )
    }
}