import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography, Grid } from '@mui/material';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="sm">
        <Grid container spacing={2} justifyContent="center" textAlign="center">
          <Grid item xs={12}>
            <Typography variant="h1" sx={{ color: 'gray' }}>
              404
            </Typography>
            <Typography variant="h6">
              The page you’re looking for doesn't exist.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#00df9a',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#00a47b',
                  },
                }}
              >
                Back Home
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt="404 Not Found"
              width="100%"
              height="auto"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
