import { Container, Card, CardMedia, Box, CardContent, Typography } from '@mui/material';

const MovieDetailCard = (props) => {
    console.log(props);
    // const [movie, setMovie] = useState([]);
    // useEffect(() => {
    //     const fetchMovie = async () => {
    //         try {
    //             const fetchedMovie = await Tmdb.get("tracks/", {
    //                 params: {
    //                   ids: props.movieId
    //                 }
    //             });
    //             setMovie(fetchedprops.tracks[0]);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     fetchMovie();
        
    //     const script = document.createElement('script');

    //     script.src = "https://open.spotify.com/embed-podcast/iframe-api/v1";
    //     script.async = true;
    
    //     document.body.appendChild(script);
    // }, [props]);


    return (
        <Container sx={{ py: 8 }}>
            <Card sx={{ display: 'flex' }}>
                
                <CardMedia
                    component="img"
                    sx={{
                        width: 1/2
                    }}
                    image={`${props.album.images[0].url}`}
                    alt="Movie poster"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography component="div" variant="h5">
                        {props.track.name}
                    </Typography>
                    <Typography component="div" variant="h6">
                        {props.track.artists[0].name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {new Date(props.track.album.release_date).getFullYear()}
                    </Typography>
                    <Box
                        sx={{
                        width: 175,
                        display: 'flex',
                        alignItems: 'center',
                        }}
                    >
                        <Box sx={{ ml: 2 }}>{props.track.popularity}</Box>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}

export default MovieDetailCard;