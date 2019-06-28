
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';


 class PokemonList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: [],
            poke: {},
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.getPokemon = this.getPokemon.bind(this)
    }

    componentWillMount(){
        this.getPokemon()
    }
 
    getPokemon(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(data => data.json())
            .then(pokemon => {
                this.setState({
                    pokemon: pokemon.results
                })
                console.log(pokemon)
            })
            .catch(err => console.log(err))
    }

    getOne(url){
        fetch(url)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    poke: data
                })
                console.log('single poke ')
                console.log(data)
            })
            .catch(err => console.log(err))
    }
    

  render() {
      const pokemon1 = this.state.pokemon.map((pokemon, i) => {
          return(
          <Link  to ={ `/SinglePokemon/${i+1}`} key={i} onClick={()=>{this.getPokemon(pokemon.url)}}>{pokemon.name}  </Link>)
      })
    return (

      <div className="App">
       
 
         {pokemon1}  

        
    
        {/* <SinglePoke poke={this.state.poke.name}/> */}
      </div>
    );
  }
}
export default  PokemonList;