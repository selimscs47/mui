import { BrowserRouter, Route, Routes } from "react-router-dom";

import Notes from "./pages/Notes";
import Create from "./pages/Create";

import { createTheme, ThemeProvider } from "@material-ui/core";

const test = createTheme({
  palette: {
    primary: {
      main: "#f39c12",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={test}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
