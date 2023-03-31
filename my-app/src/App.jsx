import { Stack } from "@chakra-ui/react";
// import { useState } from 'react'

import "./App.css";
import Nav from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div>
      <Stack>
        <Nav />
        <AllRoutes />
      </Stack>
    </div>
  );
}

export default App;
