import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './';
import { MainComponent, Toolbar, Content }  from './styles';

const App = () => {


  return (
    <MainComponent>
        <CssBaseline />
        <NavBar />
        <Content>
          <Toolbar>
            <Routes>
              <Route exact path="/" element={<Movies />} />
              <Route exact path="/actors/:id" element={<Actors />} />
              <Route exact path="/movie/:id" element={<MovieInformation />} />
              <Route exact path="/profile/:id" element={<Profile />} />
            </Routes>
          </Toolbar>
        </Content>
    </MainComponent>
  )
}

export default App
