import { useState } from "react";
import "../scss/modal.scss";

function Modal(props) {
  console.log(props.wantModify);
  function closeModal() {
    props.closeModal();
  }

  return (
    <div className="modal">
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modal--closeBtn" onClick={closeModal}>
          ✖
        </button>

        <div className="modal__header">수정</div>
        <div>
          <div>{props.wantModify[0]}</div>
          <div>{props.wantModify[1]}</div>
        </div>
        <div>
          <div>취소</div>
          <div>저장</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
