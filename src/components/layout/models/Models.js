import React from "react";
import { GET_MODELS_INFO } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { Grid, Avatar, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../../shared/Loader";

function Models() {
    const { loading, data, errors } = useQuery(GET_MODELS_INFO);

    if (loading) return <Loader />;
    if (errors) return <h4>Error...</h4>;

    const { models } = data;
    return (
        <Grid
            container
            sx={{
                boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px ",
                borderRadius: 4,
                position: "sticky",
                top: "70px",
            }}
        >
            {models.map((model, index) => (
                <React.Fragment key={model.id}>
                    <Grid
                        item
                        xs={12}
                        padding={2}
                        sx={{
                            "&:hover": {
                                background: "rgb(0,0,0,0.01)",
                            },
                            borderRadius: 1,
                        }}
                    >
                        <Link
                            to={`/models/${model.slug}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                textDecoration: "none",
                                color: "InfoText"
                            }}
                        >
                            <Avatar src={model.avatar.url} sx={{ marginRight: 2 }} />
                            <Typography component="p" variant="p" color="text.secondry">
                                {model.name}
                            </Typography>
                        </Link>
                    </Grid>
                    {index !== models.length - 1 && (
                        <Grid item xs={12}>
                            <Divider variant="middle" />
                        </Grid>
                    )}
                </React.Fragment>
            ))}
        </Grid>
    );
}

export default Models;
