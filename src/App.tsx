import { FC } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/index";
import { Provider } from "react-redux";
import MuiTheme from "./theme";

const App: FC = () => {
  return (
    <div className="App">
        <MuiTheme>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </MuiTheme>
    </div>
  );
};

export default App;
