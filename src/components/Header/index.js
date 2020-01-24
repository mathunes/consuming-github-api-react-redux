import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <form>
                    <input type="text" placeholder="Pesquisar..." />
                    <input type="submit" />
                </form>
            </header>
        )
    }
}