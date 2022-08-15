import React from "react";

import { GET_PRODUCTS_INFO } from "../graphql/queries";
import { useQuery } from "@apollo/client";

import { Grid } from "@mui/material";
import CardEL from "../../shared/CardEL";
import Loader from "../../shared/Loader";

function Products() {
  const { data, loading, errors } = useQuery(GET_PRODUCTS_INFO);

  if (loading) return <Loader />;
  if (errors) return <h4>Error...</h4>;

  return (
    <Grid container spacing={3} sx={{justifyContent:"center"}}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
