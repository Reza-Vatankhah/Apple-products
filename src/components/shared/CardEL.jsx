import React from "react";
import {
  Grid,
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import RateForm from "../Rating/RateForm";

function CardEL({ title, slug, coverPhoto, model }) {
  return (
    <Card
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px ",
        borderRadius: 4,
        "&:hover": {
          transform: "scale(1.1)",
          transition: "all 1s ease",
        },
      }}
    >
      {model && (
        <CardHeader
          avatar={<Avatar src={model.avatar.url} />}
          title={
            <Typography component="p" variant="p" fontWeight={500}>
              {model.name}
            </Typography>
          }
        />
      )}
      <CardMedia
        component="img"
        height="200"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography component="h3" variant="h6" color="text.primary">
          {title}
        </Typography>
        <Divider variant="middle" sx={{ margin: "10px" }} />
      </CardContent>
      <Grid item xs={12}>
        <RateForm />
      </Grid>
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            Read
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEL;
