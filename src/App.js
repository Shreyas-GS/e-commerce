import logo from "./logo.svg";
import "./App.css";

import {Route,Routes} from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes/>}>
        </Route>
        <Route></Route>        
      </Routes>
    </div>
  );
}

export default App;
