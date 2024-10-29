import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Id6page from './pages/id6page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/Page6`} element={<Id6page />} />
        
      </Routes>
    </BrowserRouter>
  );
};