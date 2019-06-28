
// import React from 'react';
// import SinglePoke from './SinglePoke';
// import './App.css';
// import PokemonList from './pokemonList';
// import Main from './Main';
// import { BrowserRouter as  Link } from "react-router-dom";

//  class App extends React.Component {
//     constructor(props){
//         super(props);
        
//     }
    

//   render() {
      
      
//     return (
//       <div className="welcome">
//        <h1>welcome to my pokemon App !</h1>

//        <p>Click the button below to see all the pokemeon</p>
      
     

        
//        <button className ="btn "  onClick={this.pokemonInline}> See All Pokemon </button>
    
//        <Link className ="See all Pokemon" to="/pokemonList">See All Pokemon </Link>  
//        <Main/> 
//        <PokemonList/>
//        <SinglePoke/>

//       </div>
//     );
//   }
// }
// export default  App;



import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import App from './App';
import PokemonList from './pokemonList';
import Home from  './Home'
import SinglePokemon from './SinglePokemon'

const Main = () => (
 
    <main>

    <Switch>
   
     <Route  exact path="/" component={Home} />
     <Route exact path="/pokemonList" component={PokemonList} />
     <Route  exact path = "/SinglePokemon/:id" component ={SinglePokemon} />



   
</Switch>

   </main>
   )
   
   export default Main;