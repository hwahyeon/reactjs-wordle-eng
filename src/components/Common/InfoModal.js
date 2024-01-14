import "../../styles/components/_info-modal.scss";

const InfoModal = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="info_content">
        <button className="closeButton" onClick={onClose}>
          &times;
        </button>
        <div className="howto_text">
          <p className="header_text">게임하는 방법</p>
          <p className="header_sub_text">
            6번 시도해서 숨겨진 글자(명사)를 맞춰보세요
          </p>
          <p className="header_sec_text">색상은 정답의 단서가 됩니다.</p>
          <div className="examples">
            <div className="example">
              <div className="green">ㅎ</div>
              <div>ㅏ</div>
              <div>ㄴ</div>
              <div>ㅡ</div>
              <div>ㄹ</div>
            </div>
            <p className="explain_text">
              ㅎ은 단어 안에 있고, 정확한 위치에 있습니다.
            </p>
            <div className="example">
              <div>ㄴ</div>
              <div className="yellow">ㅓ</div>
              <div>ㅇ</div>
              <div>ㅜ</div>
              <div>ㄹ</div>
            </div>
            <p className="explain_text">
              ㅓ는 단어 안에 있지만, 잘못된 위치에 있습니다.
            </p>
            <div className="example">
              <div>ㅂ</div>
              <div>ㅏ</div>
              <div className="gray">ㄹ</div>
              <div>ㅣ</div>
              <div>ㅁ</div>
            </div>
            <p className="explain_text">ㄹ은 단어에 포함되지 않습니다.</p>
            <p className="header_sec_text">겹자모는 두 칸을 활용합니다.</p>
            <div className="example">
              <div>ㄱ</div>
              <div>ㄱ</div>
              <div>ㅗ</div>
              <div>ㅁ</div>
              <div>ㅏ</div>
            </div>
            <p className="explain_text">ㄲ은 ㄱㄱ으로 표기합니다.</p>
            <div className="example">
              <div>ㄱ</div>
              <div>ㅗ</div>
              <div>ㅏ</div>
              <div>ㄱ</div>
              <div>ㅓ</div>
            </div>
            <p className="explain_text">ㅘ는 ㅗㅏ로 표기합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
