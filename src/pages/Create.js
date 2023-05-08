import React from 'react'
import {Typography,Container,Button,ButtonGroup} from '@material-ui/core'

export default function Create() {
  return (
    <Container>
   <Button onClick={()=>console.log("tıklandı")} variant='contained' color='primary' disableElevation>
    Oluştur
   </Button>
    </Container>
  )
}
