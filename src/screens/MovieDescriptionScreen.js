

import "./MovieDescriptionScreen.css";
import React from 'react';


function MovieDescriptionScreen() {
  const handleButtonClick = () => {
    // Redirect to another website
    window.location.href = 'https://www.netflix.com';
  };
  return (

    <div className="MovieDescriptionScreen">




    <div className='MovieDescriptionBody'>

<h1>MOVIE PREVIEW NOT AVAILABLE</h1>
<h2>Srry for the inconvinience</h2>
<button onClick={handleButtonClick}>Watch on Netflix</button>



</div>



    </div>



    
  );
}

export default MovieDescriptionScreen