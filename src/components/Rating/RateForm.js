import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
function RateForm() {

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography component="p" color="Highlight" fontWeight={600}>
                Rate us:
            </Typography>
            <Stack>
                <Rating name="size-medium" defaultValue={3} />
            </Stack>
        </div>
    );
}
export default RateForm;