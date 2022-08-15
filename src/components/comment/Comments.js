import { useQuery } from "@apollo/client";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GET_POST_COMMENTS } from "../layout/graphql/queries";

function Comments({ slug }) {
    const { loading, data } = useQuery(GET_POST_COMMENTS, {
        variables: { slug },
    });
    if (loading) return null;

    return (
        <Grid
            container
            sx={{
                boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
                borderRadius: 4,
                py: 1,
                mt: 8,
            }}
        >
            <Grid item xs={12} m={2}>
                <Typography
                    component="p"
                    variant="h6"
                    fontWeight={600}
                    color="Highlight"
                >
                    Comments
                </Typography>
                {data.comments.map((comment) => (
                    <Grid
                        item
                        xs={12}
                        key={comment.id}
                        m={2}
                        p={2}
                        border="1px solid silver"
                        borderRadius={1}
                    >
                        <Box compoent="div" display="flex" alignItems="center" mb={3}>
                            <Avatar>{comment.name[0]}</Avatar>
                            <Typography component="span" variant="p" fontWeight={600} ml={1}>
                                {comment.name}
                            </Typography>
                        </Box>
                        <Typography component="p" variant="p" ml={2}>{comment.text}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default Comments;
