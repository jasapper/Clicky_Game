import React from 'react';
import './Jumbo.css';

const Jumbo = props => (
    <div className='row'>
        <div className="jumbotron jumbo">
            <h2 className="text-center">Clicky Game Doggy (okay, just Boxers) Edition!</h2>
            <h3 className="text-center"><i>Click on an image to earn points, but don't click on the same one twice!</i></h3>
        </div>
    </div>
);

export default Jumbo;