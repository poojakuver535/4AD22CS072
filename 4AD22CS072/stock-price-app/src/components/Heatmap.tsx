import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

interface HeatmapData {
  ticker: string;
  price: number;
}

interface HeatmapProps {
  data: HeatmapData[];
}

const getColor = (price: number) => {
  if (price > 500) return "#d32f2f";
  if (price > 100) return "#f57c00";
  if (price > 50) return "#fbc02d";
  return "#388e3c";
};

const Heatmap: React.FC<HeatmapProps> = ({ data }) => {
  return (
    <Box my={4}>
      <Typography variant="h6" gutterBottom>
        Stock Price Heatmap
      </Typography>
      <Grid container spacing={2}>
        {data.map((stock) => (
          <Grid item xs={6} sm={4} md={3} key={stock.ticker}>
            <Paper
              elevation={3}
              style={{
                backgroundColor: getColor(stock.price),
                color: "#fff",
                padding: "16px",
                textAlign: "center",
              }}
            >
              <Typography variant="subtitle1">{stock.ticker}</Typography>
              <Typography variant="h6">${stock.price.toFixed(2)}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Heatmap;
