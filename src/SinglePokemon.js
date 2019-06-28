import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Link } from 'react-router-dom/cjs/react-router-dom';

 

class SinglePokemon extends React.Component{

constructor(props){
  super(props);
  this.State = {
    pokemon :[],
    poke:{},
  }
        this.getPokemon = this.getPokemon.bind(this)
      }
      componentDidMount(){
        this.getPokemon()
    }

  //   handleClick = () => {
  //   const {pokemon} = this.state

  //   this.setState({id})
  // }

    getPokemon(){
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
          .then(data => data.json())
          .then(pokemon => { 
            console.log(pokemon)
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
  

      
  render(){
    // const details = this.state.pokemon.map((pokemon, i) => {
    //   return(
    //   <Link key={i} onClick={()=>{this.getPokemon(pokemon.url)}}>{pokemon.name}</Link>)

    // } )

    return (
 <div>   


   
 </div>
    ) 
    
  }
}


export default SinglePokemon;


