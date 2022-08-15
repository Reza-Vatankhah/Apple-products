import { Typography } from '@mui/material';
import React from 'react';

function Footer() {
    return (
        <div>
            <Typography
                component="p"
                variant="p"
                bgcolor="#f7f7f7"
                color="primary"
                padding="10px"
                textAlign="center"
                mt={10}>

                &copy; Backend & Frontend developed by Reza Vatankhah

            </Typography>
        </div>
    );
}

export default Footer;