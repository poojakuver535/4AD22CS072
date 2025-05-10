import React from "react";
import { Container, Typography, Box } from "@mui/material";
import StockPage from "./components/StockPage";

function App() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Stock Price Aggregation
        </Typography>
        <StockPage />
      </Box>
    </Container>
  );
}

export default App;
