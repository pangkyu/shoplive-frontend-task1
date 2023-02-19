import "./App.scss";
import Header from "./components/Header";
import date from "./utils/format/date";
import Logo from "./components/Logo";
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

      <div>아이템 - 총 {DUMMY.length} 개</div>

      <div className="contents">
        {DUMMY.map((item) => (
          <div key={item.id} className="contents__item">
            <div className="contents__item-logo">
              <Logo />
            </div>
            <img
              src={item.imageUrl}
              className="contents__item-image"
              alt="더미이미지"
            />
            <div className="contents__item-likeCount">
              LIKE : {item.likeCount}
            </div>
            <div className="contents__item-TextBox">
              <div className="contents__item-createdAt">
                {date(item.createdAt)}
              </div>
              <div className="contents__item-title">{item.title}</div>
            </div>
            <div className="contents__item-button">
              <button className="contents__item-update">수정</button>
              <button className="contents__item-remove">제거</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
