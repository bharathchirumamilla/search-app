import React, { useState } from 'react';
import './SearchContext.css';
import SearchImageData from './SearchImageData.js';

const SearchContext = () => {

    const [search, setSearch] = useState('');
    const[resultdata, setResultData] = useState([]);

   function InputTextHandler(e){
        setSearch(e.target.value);

    }

    function searchInput(){
       setSearch('');
       let officeDetails = [];
       let image = {};
        fetch('http://api.tvmaze.com/search/shows?q='+`${search}`)
        .then(response => response.json())
        .then(result => {
            
            result.map((data, index) => {
                    officeDetails.push({
                        "id": data.show.id,
                        "image": data.show.image !== null ? data.show.image.medium: 'NA',
                        "summary": data.show.summary
                    });
            })
            setResultData(officeDetails);
        });
      // http://api.tvmaze.com/singlesearch/shows?q=the%20Ofiice
    }
    return(
        <div className="SearchContainer">
            This is Search Context
            <div className="SearchText">
                <div className="Text-Container"><input type="text" onChange={InputTextHandler} placeholder="Search Here"></input></div>
                <div className="Button-Container"><button onClick={searchInput}>Search</button></div>
            </div>
            {resultdata.length >= 1 && resultdata.map((data, item) => {
                return(
                   <SearchImageData  data={data}/>
                )
            })}
        </div>
    )
}

export default SearchContext;