import React, { useState, useEffect } from "react";
import {Container,Grid,Paper} from "@material-ui/core";
import NoteCard from "../components/NoteCard";

export default function Notes() {

  const [notes,setNotes] =useState([])

useEffect(()=>{
 
  fetch( 'http://localhost:3000/notes')
  .then(res=>res.json())
  .then(data=>setNotes(data))
},[])

  return (
        <Container>
            <Grid container>
      {notes.map(note=>(
          <Grid item key={note.id} xs={12} sm={12} md={4} lg={4}>
          <NoteCard note={note}/>
          </Grid>
      ))}
        
          </Grid>
        </Container>
      
    
  )
}
