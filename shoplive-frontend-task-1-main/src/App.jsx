import "./App.scss";
import Header from "./components/Header";
import { DUMMY } from "./dummies";
import DescriptionComponent from "./DescriptionComponent";
import { getRandomText } from "./random-text";

const App = () => {
  return (
    <div className="App">
      {/* <DescriptionComponent /> */}
      <Header />

      <div>
        <input placeholder="검색" />
        <button>검색</button>
      </div>
      <div>
        <input placeholder="title" />
        <input placeholder="likeCount" />
        <input placeholder="imageUrl" />
        <button>추가</button>
      </div>

      <div>아이템 - 총 5 개</div>

      <div className="wrap-items">
        {DUMMY.map((item) => (
          <div key={item.id} className="item-row">
            {/* <img src={item.imageUrl} /> */}
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
