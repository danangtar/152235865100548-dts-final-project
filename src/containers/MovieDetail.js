import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MovieDetailCard from '../components/MovieDetailCard';

import Tmdb from '../apis/Tmdb';

const MovieDetail = () => {
    
    const [isLoading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const params = useParams();
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                if(params)
                {
                    const fetchedMovie = await Tmdb.get("tracks/", {
                        params: {
                            ids: params.movieId
                        }
                    });
                    setMovie(fetchedMovie.data.tracks[0]);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovie();
    }, [params]);

    if(isLoading)
        return (
            <div >Loading...</div>
        )

    return (
        <MovieDetailCard props={movie}></MovieDetailCard>
    );
}

export default MovieDetail;