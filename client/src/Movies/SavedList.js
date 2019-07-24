import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`} className="saved-movie" activeClassName="saved-active">{movie.title}</NavLink>
    ))}
    <Link className="link" to="/"><div className="home-button">Home</div></Link>
  </div>
);

export default SavedList;
