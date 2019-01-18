import {render} from 'react-dom';
import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

import './PokemonIndex.scss'
import Pokemon from '../Pokemon/Pokemon'

class PokemonIndex extends Component{
  constructor(props){
    super(props);
    this.state = {
      species: [],
      fetched: false,
      loading: false,
    };
  }
  componentWillMount() {
    this.setState({
      loading: true
    });
    fetch('http://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        species: data.results,
        loading: true,
        fetched: true
      });
    });
  }
  render() {
    const {fetched, loading, species} = this.state;
    let content;
    if(fetched) {
      content =
        <div className="pokemon-index">
        {species.map(
          (pokemon,index)=>
            <Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>
        )}
        </div>;
    } else if(loading && !fetched) {
      content =
        <p class='loading-animation'>
          Looking for pokemon
        </p>;
    } else {
      content = <p>The mysterious pokemon ran away!</p>;
    }
    return (
      <div>{content}</div>
    )
  }
}

export default PokemonIndex;
