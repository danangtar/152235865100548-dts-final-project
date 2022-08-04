import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link, Container, Card, CardMedia, Box, CardContent, Typography } from '@mui/material';
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
        <Container sx={{ py: 8 }}>
            <Card sx={{ display: 'flex' }}>
                
                <CardMedia
                    component="img"
                    sx={{
                        width: 1/2
                    }}
                    image={`${movie.album.images[0].url}`}
                    alt="Movie poster"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography component="div" variant="h5">
                        {movie.name}
                    </Typography>
                    <Typography component="div" variant="h6">
                        {movie.artists[0].name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {new Date(movie.album.release_date).getFullYear()}
                    </Typography>
                    <Box
                        sx={{
                        width: 175,
                        display: 'flex',
                        alignItems: 'center',
                        }}
                    >
                        <Box sx={{ ml: 2 }}>Rating: {movie.popularity}</Box>
                    </Box>
                    <Link color="rgb(255, 0, 0)" href={movie.external_urls.spotify}>Open in Spotify</Link>
                </CardContent>
            </Card>
        </Container>
    );
}

export default MovieDetail;