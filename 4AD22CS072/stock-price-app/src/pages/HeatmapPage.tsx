import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, CircularProgress, Typography } from '@mui/material';
import Heatmap from './HeatmapPage';

const API_BASE = 'http://20.244.56.144/evaluation-service';

interface Stock {
  name: string;
  ticker: string;
}

interface PriceData {
  price: number;
  lastUpdatedAt: string;
}

const HeatmapPage = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [prices, setPrices] = useState<{ ticker: string; price: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const res = await axios.get(${API_BASE}/stocks);
        const stockEntries = Object.entries(res.data.stocks).map(([name, ticker]) => ({
          name,
          ticker,
        }));
        setStocks(stockEntries);
      } catch (err) {
        console.error('Failed to fetch stocks:', err);
      }
    };
    fetchStocks();
  }, []);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const priceResults = await Promise.all(
          stocks.map(async (stock) => {
            const res = await axios.get(${API_BASE}/stocks/${stock.ticker}?minutes=30);
            const avg =
              res.data.reduce((acc: number, d: PriceData) => acc + d.price, 0) / res.data.length || 0;
            return { ticker: stock.ticker, price: avg };
          })
        );
        setPrices(priceResults);
      } catch (err) {
        console.error('Failed to fetch prices:', err);
      } finally {
        setLoading(false);
      }
    };

    if (stocks.length > 0) {
      fetchPrices();
    }
  }, [stocks]);

  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        Market Heatmap
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <Heatmap data={prices} />
      )}
    </Box>
  );
};

export default HeatmapPage;