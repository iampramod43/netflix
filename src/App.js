import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
	return (
		<div className="app">
      <Nav />
			<Banner />
			<Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
			<Row title="Trending Now" fetchUrl={requests.fetchTranding} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
