import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./context/themeContext.jsx";
import CategoryProvider from "./context/CategoryContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CategoryProvider>
        <UserProvider>
          <BrowserRouter>
            <App />
            <CssBaseline />
          </BrowserRouter>
        </UserProvider>
      </CategoryProvider>
    </ThemeProvider>
  </Provider>
);
