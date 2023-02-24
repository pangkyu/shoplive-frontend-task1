import "../App.scss";
import date from "../utils/format/date";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Modal from "../components/Modal";
import { DUMMY } from "../dummies";
import { API_URL } from "../utils/constant";
import { imageList } from "../utils/data/imageList";
import { useEffect, useState } from "react";

const Content = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState([]);
  const [updateItem, setUpdateItem] = useState(false);
  const [wantModifyData, setWantModifyData] = useState([]);

  useEffect(() => {
    const fetchData = Object.keys(localStorage).map((key) => {
      return JSON.parse(localStorage.getItem(key));
    });
    setData(fetchData);
  }, []);

  const localStorageSetItem = async (e) => {
    e.preventDefault();
    const inputTitle = document.querySelector(".title").value;
    const inputLikeCount = document.querySelector(".likeCount").value;
    const inputImageUrl = `${API_URL}${imageList}`;
    const inputId = Date.now();
    const inputCreatedAt = Date.now();
    if (inputTitle && inputLikeCount !== "") {
      localStorage.setItem(
        inputId,
        JSON.stringify({
          id: inputId,
          title: inputTitle,
          createdAt: inputCreatedAt,
          likeCount: Number(inputLikeCount),
          imageUrl: inputImageUrl,
        })
      );
      const fetchData = Object.keys(localStorage).map((key) => {
        return JSON.parse(localStorage.getItem(key));
      });
      setData(fetchData);
    } else {
      alert("비어있는 항목이 있습니다. ");
    }
  };

  const removeItem = async (id) => {
    localStorage.removeItem(id);
    const fetchData = Object.keys(localStorage).map((key) => {
      return JSON.parse(localStorage.getItem(key));
    });
    setData(fetchData);
    alert("제거되었습니다.");
  };

  const wantModify = (title, id, image) => {
    let testA = [title, id, image];
    setWantModifyData(testA);
  };

  //   console.log(searchItem.length);
  //   console.log(searchItem);
  return (
    <div className="App">
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
          아이템 - 총 {window.localStorage.length} 개
        </div>
        <Search
          className="contents__bar-search"
          data={data}
          setSearchItem={setSearchItem}
        />
      </div>

      {updateItem && (
        <Modal
          closeModal={() => setUpdateItem(!updateItem)}
          wantModify={wantModifyData}
          setData={setData}
        />
      )}

      <div className="contents">
        {/*
          로컬스토리지 데이터만을 출력하기 위해 주석처리
          로컬스토리지 아이템추가하면 출력/기능 수행가능
        {searchItem.length == 0 ? (
          DUMMY.map((item) => (
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
          ))
        ) : (
          <div></div>
        )} */}
        {searchItem.length == 0
          ? data.map((item) => (
              <div key={item.id} className="contents__item">
                <div className="contents__item-logo">
                  <Logo />
                </div>
                <img
                  src={item.imageUrl}
                  className="contents__item-image"
                  alt="언스플래쉬랜덤이미지"
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
                  <button
                    className="contents__item-update"
                    onClick={() => {
                      setUpdateItem(!updateItem);
                      wantModify(item.title, item.id, item.imageUrl);
                    }}
                  >
                    수정
                  </button>

                  <button
                    className="contents__item-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    제거
                  </button>
                </div>
              </div>
            ))
          : searchItem &&
            searchItem.map((item) => (
              <div key={item.id} className="contents__item">
                <div className="contents__item-logo">
                  <Logo />
                </div>
                <img
                  src={item.imageUrl}
                  className="contents__item-image"
                  alt="언스플래쉬랜덤이미지"
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
                  <button
                    className="contents__item-update"
                    onClick={() => {
                      setUpdateItem(!updateItem);
                      wantModify(item.title, item.id, item.imageUrl);
                    }}
                  >
                    수정
                  </button>

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

export default Content;
