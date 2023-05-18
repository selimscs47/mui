import React from "react";
import { Card, CardHeader, CardContent, IconButton } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

export default function NoteCard({ note }) {
  return (
    <Card>
      <CardHeader  action={
          <IconButton>
            <DeleteOutlined/>
          </IconButton>
        } />
    </Card>
  )
} 
