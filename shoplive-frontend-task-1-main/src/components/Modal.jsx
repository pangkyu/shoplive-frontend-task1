import "../scss/modal.scss";
import imageList from "../utils/data/imageList";

function Modal(props) {
  function closeModal() {
    props.closeModal();
  }
  const changeImage = () => {
    console.log(imageList());
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
          <input type="text" placeholder={props.wantModify[0]} />
        </div>
        <button onClick={changeImage}>이미지 교체하기</button>
        {/* <div>{props.wantModify[1]}</div> */}
        <div className="modal__confirm">
          <div className="modal__confirm-cancel" onClick={closeModal}>
            취소
          </div>
          <div className="modal__confirm-save">저장</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
