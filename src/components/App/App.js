import {render} from 'react-dom';
import React, {Component} from 'react';

import './App.scss'
import PokemonIndex from '../PokemonIndex/PokemonIndex'

class App extends Component{
  render() {
    return (
      <div>
        <p>
          Me give up? No way!
        </p>
        <p>- Ash Ketchum</p>
        <img src={`/public/pokemon/26.png`} />
        <PokemonIndex/>
      </div>
    )
  }
}

export default App;
