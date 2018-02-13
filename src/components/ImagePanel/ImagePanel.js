import React from 'react';
import './ImagePanel.css';

const ImagePanel = props => (
    <div className="ImagePanel">
        <div className="flexGrid">{props.children}</div>
    </div>
);

export default ImagePanel;