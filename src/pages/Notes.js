import { Card, Grid, Paper } from "@material-ui/core";
import React from "react";

const title = [
  {
    title: "One Piece Hakkında Herşey",
    details: "lorem",
    category: "one piece",
    id: 1,
  },
  {
    title: "Monkey D Luffy Güçleri",
    details: "lorem",
    category: "one piecedasdas",
    id: 2,
  },
];

export default function Notes() {
  return (
    <Grid
      container
      spacing={9}
      style={{
        backgroundColor: "snow",
      }}
    >
      {title.map((noteItem) => (
        <Grid item xs={12} sm={12} md={4} lg={4} key={noteItem.id}>
          <Card
            style={{
              marginTop: "40px",
            }}
          >
            <h1>{noteItem.title}</h1>
            <p
              style={{
                color: "red",
              }}
            >
              {noteItem.details}
            </p>
            <p>{noteItem.category}</p>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
