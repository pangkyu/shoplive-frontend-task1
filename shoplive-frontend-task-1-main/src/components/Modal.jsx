import "../scss/modal.scss";
import { imageList } from "../utils/data/imageList";
import { API_URL } from "../utils/constant";
import { useState } from "react";

function Modal(props) {
  let [url, setUrl] = useState("");

  function closeModal() {
    props.closeModal();
  }

  const changeImage = () => {
    setUrl(API_URL + imageList);
  };

  const saveData = () => {
    const inputTitle = document.querySelector(".modal__content-title").value;
    const existingData = JSON.parse(localStorage.getItem(props.wantModify[1]));

    if (inputTitle !== "") {
      if (url === "") {
        localStorage.setItem(
          existingData.id,
          JSON.stringify({
            id: existingData.id,
            title: inputTitle,
            createdAt: existingData.createdAt,
            likeCount: existingData.likeCount,
            imageUrl: existingData.imageUrl,
          })
        );
      }
      if (url !== "") {
        localStorage.setItem(
          existingData.id,
          JSON.stringify({
            id: existingData.id,
            title: inputTitle,
            createdAt: existingData.createdAt,
            likeCount: existingData.likeCount,
            imageUrl: url,
          })
        );
      }
      props.closeModal();
      const fetchData = Object.keys(localStorage).map((key) => {
        return JSON.parse(localStorage.getItem(key));
      });
      props.setData(fetchData);
    } else {
      alert("제목을 입력해주세요 ");
    }
  };
  return (
    <div className="modal">
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modal--closeBtn" onClick={closeModal}>
          ✖
        </button>

        <div className="modal__header">수정</div>
        <div className="modal__content">
          <div>제목 : </div>
          <input
            type="text"
            className="modal__content-title"
            placeholder={props.wantModify[0]}
            required
          />
        </div>
        <button onClick={changeImage}>이미지 교체하기</button>
        <div className="modal__confirm">
          <div className="modal__confirm-cancel" onClick={closeModal}>
            취소
          </div>
          <div className="modal__confirm-save" onClick={saveData}>
            저장
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
