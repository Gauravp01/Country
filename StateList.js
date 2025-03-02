
import React from 'react';
import CityList from './CityList';

function StateList({ 
  countryId, 
  states, 
  onEditState, 
  onDeleteState, 
  onAddCity,
  onDeleteCity 
}) {
  return (
    <div className="state-list">
      {states.map(state => (
        <div key={state.id} className="state-item">
          <div className="state-header">
            <div className="entity-name">
              <h3 className="state-name">{state.name}</h3>
            </div>
            <div className="button-group">
              <button onClick={() => onEditState(countryId, state.id)} className="btn btn-edit">
                Edit
              </button>
              <button onClick={() => onDeleteState(countryId, state.id)} className="btn btn-delete">
                Delete
              </button>
              <button onClick={() => onAddCity(countryId, state.id)} className="btn btn-add">
                Add City
              </button>
            </div>
          </div>
          {state.cities.length === 0 ? (
            <div className="empty-state">
              <p>No cities added yet</p>
            </div>
          ) : (
            <CityList
              countryId={countryId}
              stateId={state.id}
              cities={state.cities}
              onDeleteCity={onDeleteCity}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default StateList;