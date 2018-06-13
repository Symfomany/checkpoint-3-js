import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import registerServiceWorker from "./registerServiceWorker";
import theme from "./theme";

const myTheme = createMuiTheme(theme);

ReactDOM.render(
  <MuiThemeProvider theme={myTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
