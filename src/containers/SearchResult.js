import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Tmdb from '../apis/Tmdb';
import { useNavigate } from "react-router-dom";

const SearchResult = (params) => {
    console.log(params);
    const [song, setSong] = React.useState([]);
    let navigate = useNavigate();
  
    React.useEffect(() => {
    const fetchMovie = async () => {
            try {
                if(params)
                {
                    const fetchedMovie = await Tmdb.get("search/", {
                        params: {
                            q: params.query, type: 'tracks', offset: '0', limit: '10', numberOfTopResults: '5'
                        }
                    });
                    setSong(fetchedMovie.data.tracks.items);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovie();
    }, [params]);
  

  return (
    <Grid container>
    {
        song.map((song, key) => (
            <Typography item key={key} id={song.data.id} onClick={() => {navigate("movie/" + song.data.id)}} sx={{ display: 'flex', margin: 3 }}>
                {song.data.name}
            </Typography>
        ))
    }
    </Grid>
  );
};
export default SearchResult;
