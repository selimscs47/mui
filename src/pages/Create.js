import { useState } from "react";
import {Container,Button,TextField,makeStyles,Radio,RadioGroup,FormControl,FormControlLabel,FormLabel} from "@material-ui/core";
import {useNavigate} from   "react-router-dom";


const sitil = makeStyles({
  field: {
    marginTop: 20,  
    marginBottom: 20,
    display: "block", 
  }
})

export default function Create() {
 
 const sitilOlustur = sitil();
  const [title, setTitle] = useState(" ");
  const [details, setDetails] = useState(" ");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("one piece");
 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false); 
    setDetailsError(false);

    if (title === ""){ 
    setTitleError(true) 
  }
    if (details === ""){ 
    setDetailsError(true)
  }

if (title && details) { 
  fetch('http://localhost:3000/notes' , {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({title,details,category})
  }).then(()=>navigate ('/'))
}
  }
 
  return (
    <Container> 
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>  
        <TextField label="Not Başlık" fullWidth className={sitilOlustur.field} 
        onChange={(e) => setTitle(e.target.value)}  error={titleError}  />
        <br/>
        <TextField label="Not Detay" fullWidth  className={sitilOlustur.margin}
        onChange={(e) => setDetails(e.target.value)}  error={detailsError}  />
        <br/>
        <RadioGroup>
          <FormControlLabel value="one piece" control={<Radio/>} label="One Piece"/>
          <FormControlLabel value="naruto" control={<Radio/>} label="Naruto"/>
        </RadioGroup>
        <Button className={sitilOlustur.margin} type="submit" color="secondary" variant="contained">Oluştur</Button>
        </form>
        </Container>
  )   
}

            
  
