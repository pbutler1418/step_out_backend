import React from 'react';
import { Link } from 'react-router-dom';


const AddExperience = (props) => {
  return (
    <div>
      <form onSubmit={(e) => {
        e.props.AddExperience();}} >
        <input name="name" placeholder="name" type="text" value={props.name} onChange={props.handleExperienceChange} />
        <input name="location" placeholder="location" type="text" value={props.location} onChange={props.handleExperienceChange} />
        <input name="description" placeholder="description" type="text" value={props.description} onChange={props.handleExperienceChange} />
        <button>Add Experience</button>
      </form>
    </div>
  );
}

export default AddExperience;