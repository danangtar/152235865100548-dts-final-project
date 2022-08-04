import { Box, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  let navigate = useNavigate();

  return (
      <Card id={movie.track.id} onClick={() => {navigate("movie/" + movie.track.id)}} sx={{ display: 'flex', margin: 3 }}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 225 }}
          image={`${movie.track.album.images[0].url}`}
          alt="Movie poster"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {movie.track.name}
            </Typography>
            <Typography component="div" variant="h6">
              {movie.track.artists[0].name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {new Date(movie.track.album.release_date).getFullYear()}
            </Typography>
            <Box
              sx={{
                width: 175,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box sx={{ ml: 2 }}>{movie.track.popularity}</Box>
            </Box>
          </CardContent>
        </Box>
      </Card>
  );
}

export default MovieCard;