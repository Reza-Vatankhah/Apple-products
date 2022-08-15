import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Products from '../products/Products';
import Models from '../models/Models';

function HomePage() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} padding={3}>
                <Grid item xs={12} md={3} mt={4} >
                    <Typography component="h3" variant="h5" mb={3} fontWeight="bold">Products</Typography>
                    <Models />
                </Grid>
                <Grid item xs={12} md={9} mt={4}>
                    <Typography component="h3" variant="h5" mb={3} fontWeight="bold">Interduce</Typography>
                    <Products />
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;