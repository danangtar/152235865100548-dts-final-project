import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import MovieList from './MovieList';

const Home = () => {

  return (
    <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="xl">
            <MovieList/>
          </Container>
        </Box>
  );
};
export default Home;
