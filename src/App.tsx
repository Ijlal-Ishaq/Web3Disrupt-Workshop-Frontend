import { FC } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/index";
import MuiTheme from "./theme";
import ConnectWallet from "./components/ConnectWallet";

const App: FC = () => {
  return (
    <div className="App">
      <MuiTheme>
        <BrowserRouter>
          <ConnectWallet />
          <Router />
        </BrowserRouter>
      </MuiTheme>
    </div>
  );
};

export default App;
