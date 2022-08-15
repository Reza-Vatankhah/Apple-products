import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/system";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import theme from "./components/layout/mui/theme";

const client = new ApolloClient({
  // uri: process.env.REACT_APP_GRAPHCMS_URI,
  uri: "https://api-ca-central-1.hygraph.com/v2/cl5rpsgea0dsj01ume3sf8qyj/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
