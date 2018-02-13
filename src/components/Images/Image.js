import React from 'react';
import './Image.css';

const Image = props => (
    <div className='img-thumbnail imgWrapper'>
        <img onClick={() => props.sortImages(props.id, props.clicked)} id={props.id} src={props.src} className='img-fluid imgSize gridEle ' alt="rick and morty character" data-clicked={props.clicked}/>
    </div>
);

export default Image;
