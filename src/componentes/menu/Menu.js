import React from 'react';
import './menu.scss'

class Menu extends React.Component {
    dropdownState = {isOpen: false};
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand px-3" href="#">
                    <img src="https://d2lcsjo4hzzyvz.cloudfront.net/blog/wp-content/uploads/2020/04/29153728/mindfulness-en-casa.jpg" width="90em"></img>
                </a>
                <button onClick={this.toggleOpen} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse pt-2" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item px-3">
                            <a className="nav-link" href="#" class="texto-menu">Inicio</a>
                        </li>
                        <li class="nav-item px-3">
                            <a className="nav-link" href="#/servicios" class="texto-menu">Servicios</a>
                        </li>
                        <li class="nav-item px-3">
                            <a className="nav-link" href="#/contacto" class="texto-menu">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;