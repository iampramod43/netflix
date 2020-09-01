import React from 'react';
import './Row.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
	const [ movies, setMovies ] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
	useEffect(
		() => {
			async function fetchData() {
				const request = await axios.get(fetchUrl);
				setMovies(request.data.results);
				return request;
			}
			fetchData();
		}, [fetchUrl]);
    const opts = {
        height: "390px",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name|| "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
                console.log('url =-=-', trailerUrl);

            })
            .catch((error) => console.log(error));
        }
    }
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map((movie) => (
					<img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
						className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
						src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
						alt={movie.name}
					/>
				))}
			</div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> } 
		</div>
	);
}

export default Row;
