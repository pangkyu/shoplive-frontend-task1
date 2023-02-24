import "./App.scss";
import Header from "./components/Header";
import Content from "./pages/Content";
import DescriptionComponent from "./DescriptionComponent";

const App = () => {
  return (
    <div className="App">
      {/* <DescriptionComponent /> */}
      <Header />
      <Content />
    </div>
  );
};

export default App;
