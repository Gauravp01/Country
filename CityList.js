
import React from 'react';

function CityList({ countryId, stateId, cities, onDeleteCity }) {
  return (
    <div className="city-list">
      {cities.map(city => (
        <div key={city.id} className="city-item">
          <div className="entity-name">
            <span className="city-name">{city.name}</span>
          </div>
          <button 
            onClick={() => onDeleteCity(countryId, stateId, city.id)} 
            className="btn btn-delete"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CityList;