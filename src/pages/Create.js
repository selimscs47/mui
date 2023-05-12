import { Button, Container, TextField, makeStyles, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import  { useNavigate} from "react-router-dom";

const style = makeStyles({
  margin: {
    marginBottom: 20,
    marginTop: 20,
  },
  btn: {
    marginBottom: 20,
  },
  field: {
    marginTop: 10,
    marginBottom: 10,
    display: "block",
  },
});

const selimcanSagdic = [
  {
    id: 1,
    value: "Note Title",
    label: "Note Title",
  },
  {
    id: 2,
    value: "Note Details",
    label: "Note Details",
  },
  {
    id: 3,
    value: "Category",
    label: "Category",
  },
];

const ahmet = [
  {
    id: 1,
    label: "Money",
    value: "money",
  },
  {
    id: 2,
    label: "Todos",
    value: "todos",
  },
  {
    id: 3,
    label: "Reminders",
    value: "reminders",
  },
];

export default function Create() {
  const classes = style();
  const [title, setTitle] = useState("dasdsa");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const [title123, setTitle123] = useState("selimca");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, details);

    title === "" ? setTitleError(true) : setTitleError(false);
    details === "" ? setDetailsError(true) : setDetailsError(false);
    title && details && console.log("submit", title, details);
  };

  const error = titleError || detailsError;

  return (
    <Container>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        {selimcanSagdic.map((just) => (
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            className={classes.margin}
            label={just.label}
            variant="standard"
            color="secondary"
            fullWidth
            required={just.required}
            multiline
            maxRows={4}
            error={error}
            placeholder="Enter Note Title"
            key={just.id}
          />
        ))}
        {ahmet.map((i, index) => (
          <FormControl className={classes.field} key={index}>
            <FormLabel>{title123}</FormLabel>
            <RadioGroup key={index} value={category} onChange={(e) => setCategory(e.target.value)}>
              <FormControlLabel value={i.label} control={<Radio />} label={i.label} />
            </RadioGroup>
          </FormControl>
        ))}
        <Button className={classes.btn} type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </form>
    </Container>
  );
}
