import "./App.scss";
import Header from "./components/Header";
import date from "./utils/format/date";
import Logo from "./components/Logo";
import Search from "./components/Search";
import { DUMMY } from "./dummies";
import localStorageSetItem from "./utils/feature/localStorageSetItem";
import DescriptionComponent from "./DescriptionComponent";
import { useEffect } from "react";

const App = () => {
  let keys = Object.keys(localStorage);
  let itemArray = [];
  for (let key of keys) {
    // console.log(`${key} : ${localStorage.getItem(key)}`);
    // console.log(JSON.parse(localStorage.getItem(key)));
    itemArray.push(JSON.parse(localStorage.getItem(key)));
  }
  console.log(itemArray);

  const removeItem = async (id) => {
    alert("제거 버튼이 눌렸습니다");
    localStorage.removeItem(id);
  };

  return (
    <div className="App">
      {/* <DescriptionComponent /> */}
      <Header />
      <form className="contents-form">
        <div className="contents__addBar">
          <input placeholder="title" type="text" className="title" required />
          <input
            placeholder="likeCount"
            type="number"
            className="likeCount"
            required
          />
          <button onClick={localStorageSetItem}>추가</button>
        </div>
      </form>
      <div className="contents__bar">
        <div className="contents__bar-itemAmount">
          아이템 - 총 {DUMMY.length + window.localStorage.length} 개
        </div>
        <Search className="contents__bar-search" />
      </div>
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
        {itemArray.map((item) => (
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
              <button
                className="contents__item-remove"
                onClick={() => removeItem(item.id)}
              >
                제거
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
