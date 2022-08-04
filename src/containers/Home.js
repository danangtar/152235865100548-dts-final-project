import * as React from 'react';
import { Box, Container, Grid, TextField, Button } from '@mui/material';

import MovieList from './MovieList';
import SearchResult from './SearchResult';

const Home = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [query, setQuery] = React.useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let song = data.get('song');
    setQuery(song);
    setLoading(false);
  };

  const Search = () => {
    if(query)
      return (<SearchResult query={query}/>);
  }

  if(isLoading)
   return (
    <Box
      sx={{
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="xl">
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={10} sm={10}>
              <TextField
                name="song"
                required
                fullWidth
                id="song"
                label="Find Song"
                autoFocus
              />
            </Grid>
            <Grid item xs={2} sm={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Find
              </Button>
            </Grid>
          </Grid>
        </Box>
        <MovieList/>
      </Container>
    </Box>
   )  

  return (
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="xl">
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={10} sm={10}>
                  <TextField
                    name="song"
                    required
                    fullWidth
                    id="song"
                    label="Find Song"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Find
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Search/>
          </Container>
        </Box>
  );
};
export default Home;
