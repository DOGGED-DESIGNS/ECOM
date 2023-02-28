import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Generalprovider from "./context/Generalprovider";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Generalprovider>
    <App />
  </Generalprovider>
);
