import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss'

const App = () => {
  return (
    <div>
      <p>
        Me give up? No way!
      </p>
      <p>- Ash Ketchum</p>
      <img src={`/public/pokemon/26.png`} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
