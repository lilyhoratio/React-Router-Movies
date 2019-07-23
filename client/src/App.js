import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom';

import SavedList from './Movies/SavedList.js';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';
// import styled from 'styled-components';

// const routes = [
//   {
//     path: '/',
//     component: MovieList
//   },
//   {
//     path: '/movies:id',
//     component: Movie
//   }
// ]

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList}/>
      {/* <Route path="/movies/:id" component={Movie}/> */}
      {/* Render - Pass anonymous function that returns the component we want mounted */}
      <Route path="/movies/:id" render={(props)=> <Movie {...props} addToSavedList={addToSavedList} />}/>
      {/* <Switch>
        {routes.map(({path, component: C}) => (
          <Route 
            path={path}
            component={C}
          />
        ))}
      </Switch> */}
    </div>
  );
};

export default App;
