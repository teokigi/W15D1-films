import React from 'react';
import './App.css';
import FilmBox from './containers/FilmBox.js';

function App() {
  return (
    <div className="terra">
        <div className="borderline">
            <h2>Upcoming Film Releases for UK</h2>
            <hr />
            <FilmBox />
            <hr />
            <div className="footline">
                <h2> <a href="https://www.imdb.com/calendar/?region=gb"> View more upcoming releases >></a></h2>
            </div>
        </div>
    </div>
  );
}

export default App;
