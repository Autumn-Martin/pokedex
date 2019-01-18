import {render} from 'react-dom';
import React, {Component} from 'react';

import './Pokemon.scss'

class Pokemon extends Component{
  render() {
    const {pokemon,id} = this.props;
    return (
      <div className='pokemon-container'>
          <img src={`/public/pokemon/${id}.png`} />
          <p> {pokemon.name} </p>
      </div>
    )
  }
}

export default Pokemon;
