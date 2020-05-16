import React, { Component } from "react";

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark bg-light">
                    <a 
                    href="#"
                    className="navbar-brand col-sm-3 col-md-2 nr-0 align-items-center">Pokedex</a>
                </nav>
            </div>
        )
    }
}