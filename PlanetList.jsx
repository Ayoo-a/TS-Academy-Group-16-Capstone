import React, { useState, useEffect } from 'react';
import './PlanetGallery.css';

function PlanetGallery() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    // call the live API link here, we could have use axios which will make us not need the json cinverter but fecth is okay also, it is good and we will need it to pass the api as json file something like that sha
    fetch('https://anurella.github.io/json/planets.json')
      .then((response) => response.json())  //the response.json is cause we use fecth, axios could have not warrant it but I no wan installa am sha
      .then((data) => setPlanets(data))
      .catch((error) => console.error('Error fetching planet data:', error));
  }, []);

  return (
    <section id="planet-gallery" className="gallery-container">
      <div className="gallery-intro">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>Each planet in our solar system has unique physical characteristics.</p>
      </div>

      <div className="planet-grid">
        {planets.map((item, index) => (
          /* MANDATORY: Using the <figure> element as per instructions, also we use this because  It tells the browser that everything inside (the image and the text) is one single unit of content. like they are wrap together similar to <div>  but higher , while the [key) is just react unique ID, It helps React keep track of which items have changed, been added, or been removed. Without a key, if we changed one planet, React might get confused and try to redraw the entire list, which makes the website slow */
          <figure key={index} className="planet-card">
            <img src={item.image} alt={item.planet} className="planet-img" />
            
            {/* MANDATORY: Using <figcaption> for the planet info, what figcaption tAG DOES IS  just like saying This text right here is the name or description of the picture sitting above it. ehn ehn just like alt but alt is invisible incase web no load, something like that sha */}
            <figcaption>
              <h3>{item.planet}</h3>
              <p>Distance from Sun: <strong>{item.distanceFromSun} million km</strong></p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default PlanetGallery;