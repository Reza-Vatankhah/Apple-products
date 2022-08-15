import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from "react-router-dom"

function Header() {
    return (
        <AppBar position="sticky">
            <Container maxWidth="lg" display="flex" >
                <Toolbar >
                    <Typography component="h1" variant="h5" fontWeight="bold" flex={1} >
                        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                            Apple Products
                        </Link>
                    </Typography>
                    <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                        <AppleIcon style={{ fontSize: "2rem" }} />
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;