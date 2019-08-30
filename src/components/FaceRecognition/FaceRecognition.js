import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    const boundingBoxStyle = {
        top: box.topRow,
        right: box.rightCol,
        bottom: box.bottomRow,
        left: box.leftCol        
    }
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={imageUrl} width='250px' height='auto' />
                <div className='bounding-box' style={boundingBoxStyle}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;