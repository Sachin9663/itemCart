import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Cart from "./Components/cart";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className='headText'>My Cart</span>
                </header>
                <section>
                    <Cart/>
                </section>

            </div>
        );
    }
}
export default App;
