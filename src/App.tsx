import { BrowserRouter } from "react-router-dom";
import "./App.css";

import AppRoutes from "./routes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
