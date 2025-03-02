import React from 'react';
import StateList from './StateList';

function CountryList({ 
  countries, 
  onEditCountry, 
  onDeleteCountry, 
  onAddState,
  onEditState,
  onDeleteState,
  onAddCity,
  onDeleteCity
}) {
  return (
    <div className="country-list">
      {countries.map(country => (
        <div key={country.id} className="country-item">
          <div className="country-header">
            <div className="entity-name">
              <h2 className="country-name">{country.name}</h2>
            </div>
            <div className="button-group">
              <button onClick={() => onEditCountry(country.id)} className="btn btn-edit">
                Edit
              </button>
              <button onClick={() => onDeleteCountry(country.id)} className="btn btn-delete">
                Delete
              </button>
              <button onClick={() => onAddState(country.id)} className="btn btn-add">
                Add State
              </button>
            </div>
          </div>
          {country.states.length === 0 ? (
            <div className="empty-state">
              <p>No states added yet</p>
            </div>
          ) : (
            <StateList
              countryId={country.id}
              states={country.states}
              onEditState={onEditState}
              onDeleteState={onDeleteState}
              onAddCity={onAddCity}
              onDeleteCity={onDeleteCity}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default CountryList;