import { useQuery } from "@apollo/client";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../shared/Loader";
import { GET_POST_INFO } from "../graphql/queries";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../../comment/CommentForm";
import Comments from "../../comment/Comments";

function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (errors) return <h4>Error...</h4>;

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            xs={12}
            mt={9}
            display="flex"
            justifyContent="space-between"
          >
            <Typography component="h2" variant="h4" fontWeight={700}>
              {data.post.title}
            </Typography>
            <ArrowForwardRoundedIcon
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer" }}
            />
          </Grid>
          <Grid item xs={12} mt={6} align="center">
            <img
              src={data.post.coverPhoto.url}
              alt={data.post.slug}
              width="50%"
              sizes="cover"
              style={{ borderRadius: 15 }}
            />
          </Grid>
          <Grid item xs={12} mt={7}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                src={data.post.model.avatar.url}
                sx={{ width: 150, height: 150, marginRight: 2 }}
              />
              <Typography
                component="p"
                variant="h5"
                fontWeight={650}
                color="dimgray"
              >
                Category : {data.post.model.name}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} mt={5}>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.post.content.html),
              }}
            ></div>
          </Grid>
          <Grid item xs={12}>
            <CommentForm slug={slug} />
          </Grid>
          <Grid item xs={12}>
            <Comments slug={slug} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ProductPage;
