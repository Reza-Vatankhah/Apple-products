import React from "react";
import sanitizeHtml from "sanitize-html";
import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { GET_MODEL_INFO } from "../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CardEL from "../../shared/CardEL";
import Loader from "../../shared/Loader";
import RateForm from "../../Rating/RateForm";

function ModelPage() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const { loading, data, errors } = useQuery(GET_MODEL_INFO, {
        variables: { slug },
    });

    if (loading) return <Loader />;
    if (errors) return <h4>Error...</h4>;

    const {
        model: { description, posts, avatar, name },
    } = data;
    return (
        <Container maxWidth="lg">
            <Grid container mt={10}>
                <Grid
                    item
                    xs={12}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <ArrowBackRoundedIcon
                        onClick={() => navigate(-1)}
                        style={{
                            cursor: "pointer",
                            position: "absolute",
                            top: "141px",
                            left: "100px",
                        }}
                    />
                    <Avatar src={avatar.url} sx={{ width: 300, height: 300 }} />
                    <Typography component="h3" variant="h5" fontWeight={700} mt={2}>
                        {name}
                    </Typography>
                </Grid>
                <Grid item xs={12} mt={5}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: sanitizeHtml(description.html),
                        }}
                    ></div>
                </Grid>
                <Grid item xs={12}>
                    <RateForm slug={slug} />
                </Grid>
                <Grid item xs={12} mt={6}>
                    <Typography
                        component="h3"
                        variant="h5"
                        fontWeight={600}
                        color="darkgray"
                        mb={5}
                    >
                        New {name} introduction
                    </Typography>
                    <Grid container spacing={7}>
                        {posts.map((post) => (
                            <Grid item xs={12} sm={6} md={4} key={post.id}>
                                <CardEL
                                    title={post.title}
                                    slug={post.slug}
                                    coverPhoto={post.coverPhoto}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ModelPage;
