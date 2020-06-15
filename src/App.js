import React from 'react';
import Game from './Game';


const style = {
    textAlign: 'center',
    marginBottom:70
};

const App = () => 
<div className="container mb-5" >
    <div className="row">
        <div className="col-md-12">
            <h1 style = { style } >Tic Tac Toe</h1>
            <Game />
        </div>
    </div>
</div>;

export default App;
