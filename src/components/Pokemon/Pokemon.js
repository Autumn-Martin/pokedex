import {render} from 'react-dom';
import React, {Component} from 'react';

import './Pokemon.scss'


class Pokemon extends Component{
  constructor(props) {
    super(props);
    this.state = {
      abilities: [],
      fetched: false,
      loading: false,
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });
    const {id} = this.props;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response=>response.json())
      .then(data=>{
        var abilityNames = data.abilities.map((el,index)=>
          el.ability.name
        )
        return abilityNames
      })
      .then(abilities=>{
        console.log(abilities)
        this.setState({
          abilities: abilities,
          loading: true,
          fetched: true
        });
      });
  }

  render() {
    const {pokemon,id} = this.props;
    const {fetched, loading, abilities} = this.state;
    let content;
    if(fetched) {
      content =
        <div className='pokemon-container'>
          <img src={`/public/pokemon/${id}.png`} />
          <p>{pokemon.name}</p>
          <p>{abilities}</p>
        </div>
    } else if(loading && !fetched) {
      content =
        <div className='pokemon-container'>
          <img src={`/public/pokemon/${id}.png`} />
          <p>{pokemon.name}</p>
          <p className='loading-animation'>
            Looking for abilities
          </p>
        </div>
    } else {
      content =
        <div className='pokemon-container'>
          <img src={`/public/pokemon/${id}.png`} />
          <p>{pokemon.name}</p>
          <p>These pokemon are missing abilities!</p>
        </div>
    }
    return (
      <div>{content}</div>
    )
  }
}

export default Pokemon;
