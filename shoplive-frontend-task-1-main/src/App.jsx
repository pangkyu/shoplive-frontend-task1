import "./App.scss";
import Header from "./components/Header";
import Content from "./pages/Content";
import DescriptionComponent from "./DescriptionComponent";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      {/* <DescriptionComponent /> */}
      <Header />
      <Routes>
        <Route path="" element={<Content />}></Route>
        {/* <Route path="Search"></Route> */}
      </Routes>
    </div>
  );
};

export default App;
