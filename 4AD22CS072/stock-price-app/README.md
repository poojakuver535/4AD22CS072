# Stock Price Aggregation Frontend

This is a frontend application built with React and Vite to display stock prices and visualize them using charts and a heatmap. The data is fetched from a backend API to provide real-time stock price information.

## Features

- Displays a list of stock prices in a heatmap.
- Provides a line chart that visualizes the historical prices of a selected stock.
- Allows users to choose a stock and time interval to view its price history.
- Interactive components with Material-UI for a clean and responsive design.

## Tech Stack

- **Frontend:**

  - React.js
  - Vite
  - Material-UI (MUI)
  - Recharts (for data visualization)
  - Axios (for API calls)
  - TypeScript

- **Backend API (external):**
  - The backend is expected to be running at `http://20.244.56.144/evaluation-service` and should provide endpoints for fetching stock prices.

## Prerequisites

Before running the app, make sure you have the following installed:

- Node.js (version 16 or above)
- npm or yarn

## Getting Started

Follow these steps to get the project up and running locally.

### 1. Clone the repository

```bash
git clone https://github.com/poojakuver535/stock-price-frontend.git
cd stock-price-frontend
```
