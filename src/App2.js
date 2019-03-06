import React, { Component } from 'react';
import Movies2 from './components/movies2';
import "./App.css";

class App2 extends Component {
    state = {  }
    render() { 
        return ( 
            <main className="container" >
                <Movies2 />
            </main>
         );
    }
}
 
export default App2;