import "./style/app.css";
import Layout from "./components/layout/layOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpComing from "./components/upComing/UpComing";
import Planed from "./components/planed/Planed";
import LayoutWeekly from "./components/layout/LayoutWeekly"
import DesignWeekly from "./components/designWeekly/DesignWeekly"
import store from "./reduxApp/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>

      <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Layout/>}/>
            <Route path="/upComing" element={<Layout> <UpComing/></Layout>}/>
            <Route path="/planed" element={<Layout> <Planed/></Layout>}/>
            <Route path="/LayOutWeekly" element={<LayoutWeekly> <DesignWeekly/></LayoutWeekly>}/>
        </Routes>
      </BrowserRouter>
      </div>

    </Provider>
    
  );
}

export default App;
