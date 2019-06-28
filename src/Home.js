

import React from 'react';
import { BrowserRouter as BrowserRouter, Link } from "react-router-dom";
import './App.css';
import PokemonList from './pokemonList';


class Home extends React.Component {
    constructor(props) {
      super(props);
 }

 
    render() {
      return (
       
        <div className ="welcome">
            <h1>welcome to my pokemon App !</h1>
            <p> Click on the Link bellow to see All the pokemon</p>



            <Link className ="Pokemon" to="/PokemonList">See All Pokemon </Link>  



        </div>

              
      );
    

    }
    
  }
  
  export default Home;