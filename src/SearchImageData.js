import React from 'react';
import './SearchImageData.css';
import NOImage from './catimage.jpg';

const SearchImageData = (props) => {
    return (
        <div className="PageContainer">
            <div><img src={props.data.image !== "NA" ? props.data.image: NOImage} alt="Logo" /></div>
            <div className="ContentContainer">
                <div className="Summary">{props.data.summary}</div>
                <div className="buttonContainer"><button style={{backgroundColor : "blue", color: "white", cursor:"pointer"}}>Show Episodes</button></div>
            </div>
           
        </div>
    )
}

export default SearchImageData;