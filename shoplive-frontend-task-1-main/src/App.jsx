import "./App.scss";
import Header from "./components/Header";
import date from "./utils/format/date";
import Logo from "./components/Logo";
import Search from "./components/Search";
import { DUMMY } from "./dummies";
import DescriptionComponent from "./DescriptionComponent";

const App = () => {
  const handleAddBtn = async (e) => {
    e.preventDefault();
    alert("클릭");
    const inputTitle = document.querySelector(".title").value;
    const inputLikeCount = document.querySelector(".likeCount").value;
    const inputImageUrl = document.querySelector(".imageUrl").value;
    const inputId = Date.now();
    const inputCreatedAt = Date.now();
    console.log(inputTitle);
    console.log(inputLikeCount);
    console.log(inputImageUrl);
    console.log(inputId);
    localStorage.setItem(
      inputId,
      JSON.stringify({
        id: inputId,
        title: inputTitle,
        createdAt: inputCreatedAt,
        likeCount: inputLikeCount,
        imageUrl: inputImageUrl,
      })
    );

    // localStorage.setItem("title", title);

    // const dataArray = JSON.parse(localStorage.getItem("dataList")) || [];
    // // dataArray.push(data);
    // localStorage.setItem("datalist", JSON.stringify(dataArray));
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
          <input
            placeholder="imageUrl"
            type="text"
            className="imageUrl"
            required
          />
          <button onClick={handleAddBtn}>추가</button>
        </div>
      </form>
      <div className="contents__bar">
        <div className="contents__bar-itemAmount">
          아이템 - 총 {DUMMY.length + (window.localStorage.length - 2)} 개
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
      </div>
    </div>
  );
};

export default App;
