import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { Test } from "./test";

const App = () => (
  <BrowserRouter basename="dashboard">
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </BrowserRouter>
);
export default App;
