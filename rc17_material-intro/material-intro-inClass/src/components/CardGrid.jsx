import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import data from "../data";

export default function CardGrid() {
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        m={4}
        color="error"
      >
        CARD and GRID
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {data.map((card) => {
          const { id, img, name, text } = card;
          return (
            <Grid key={id} item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={img} alt="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
