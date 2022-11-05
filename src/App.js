import "./style/app.css";
import Layout from "./components/layout/layOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpComing from "./components/upComing/UpComing";
import Planed from "./components/planed/Planed";


function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<Layout/>}/>
          <Route path="/upComing" element={<Layout> <UpComing/></Layout>}/>
          <Route path="/planed" element={<Layout> <Planed/></Layout>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
