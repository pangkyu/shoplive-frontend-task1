import './description.scss'
const Goal = () => {
  return <div className="wrap-description">

    <h1>샵라이브 과제</h1>

    <p>사진 앨범 서비스를 출시하기로 하였습니다.
      <br/>아래와 같은 목업 디자인이 있습니다.
      <br/>이 앨범 서비스를 성공적으로 런칭할 수 있도록 개발해주십시요.
    </p>
    <p>
      Node 기준 버전 - v14<br/><br/>
      제출 방법. <br/> 
      - git private repository 생성, <br/>
      - khw@shoplive.cloud, demian@shoplive.cloud 를 Collaborator 로 등록,<br/>
      - 메일로 완성된 repo URL 보내주시면 됩니다.<br/><br/>
      OR <br/><br/>
      - git public repository 생성 <br/> 
      - 메일로 완성된 repo URL 보내주시면 됩니다.
    </p>


    <div className="wrap-quiz">
      <h2>문제 1.</h2>

      <p>주어진 데이터를 이용하여, 반응형 웹을 구성하세요</p>

      <p>반응형 break point는 - <br/>1. Desktop (1025px ~) <br/>2. Tablet (480px ~ 1024px)<br/>3. Mobile ( ~ 480px)</p>
      
      <h3>데스크탑 (1024px ~ ) 사이즈에서는 아래 스크린샷과 같은 형태로 보이면 됩니다.</h3>
      <img src="/1_desktop.png" />

      <h3>Tablet (480px ~ 1024px) 사이즈에서는 아래 스크린샷과 같은 형태로 보이면 됩니다.</h3>
      <img src="/2_tablet.png" />

      <h3>Mobile (~ 480px) 사이즈에서는 아래 스크린샷과 같은 형태로 보이면 됩니다.</h3>
      <img src="/3_mobile.png" />
    </div>

    <div className="wrap-quiz">
      <h2>문제 2.</h2>
      <p>아이템 - '추가' 기능을 구현합니다.</p>
      <p>적당한 위치에 인풋을 만들고, title, likeCount, imageUrl 을 입력하여 아이템이 추가되면 됩니다.<br/>아이템을 새로 생성할 때, "id" 와 "createdAt"은, 추가되는 시점의 TIMESTAMP 값을 자동으로 지정합니다.</p>
    </div>

    <div className="wrap-quiz">
      <h2>문제 3.</h2>
      <p> 아이템 - '제거' 기능을 구현합니다.</p>
      <p>각 아이템마다 표시되는 '제거'버튼을 클릭하면, 해당 아이템을 제거하시면 됩니다.</p>
    </div>

    <div className="wrap-quiz">
      <h2>문제 4.</h2>
      <p>데이터를 LocalStorage 에 저장하여, 항상 최신상태를 유지합니다.</p>
      <p>페이지를 새로고침하여도 데이터는 유지되야 합니다.</p>
    </div>

    <div className="wrap-quiz">
      <h2>문제 5.</h2>
      <p>아이템 - '수정' 기능을 구현합니다.</p>
      <p>각 아이템마다 표시되는 '수정'버튼을 클릭하면, 해당 아이템을 수정할 수 있는 기능을 구현하세요.</p>
      <p>수정하는 UI/UX 는 자유롭게 구성하시면 됩니다</p>
      <p>아이템을 수정하는 중에 '취소' 와 '저장' 기능을 제공하면 좋겠습니다.</p>
    </div>

    <div className="wrap-quiz">
      <h2>문제 6.</h2>
      <p>검색기능을 구현해주세요.</p>
      <p>적당한 위치에 Search Bar 를 만들고, 검색어를 입력하면, 제목에 해당 키워드를 포함한 아이템만 목록에 표시합니다.</p>
      <p>검색을 취소하고 모든 목록을 볼 수 있는 기능도 필요합니다.</p>
    </div>

    <div className="wrap-quiz">
      <h2>문제 7</h2>
      <p>검색기능을 구현할 때, 주소창의 QueryString 과 연동되게 해주세요.  </p>
      <p>검색 기능이 활성화 되면 검색어가 주소창에 표시되야 합니다. <br/>ex) localhost:3000/?keyword=입력한검색어 </p>
      <p>주소창에 검색어를 직접 변경해서 페이지를 열면, 주소창에 입력한 검색어로 검색결과가 표시되야 합니다.</p>
    </div>

    

    <div className="wrap-quiz">
      <h2>문제 8.</h2>
      <p>검색결과를 더 멋지게 표현해 봅시다.</p>
      <p>검색결과 화면에서 '검색어'가 입력된 부분만 스타일을 변경하여 Highlight 되도록 해봅시다.</p>

      <p>ex - '두산' 이라고 검색어를 입력했을 때,</p>
      <p>"동해물과 백<span style={{backgroundColor:'yellow', color: 'red', fontWeight:'bold'}} >두산</span>이 마르고 닳도록..."</p>
    </div>

    <div className="wrap-quiz">
      <h2>문제 9</h2>
      <p>8자리의 랜덤 문자열을 생성하여, 헤더영역과 각 아이템의 사진 좌상단 영역에 표시하고 싶습니다. (예시 이미지 - 'ABCDEFH' 표시 된 영역 참고)</p>
      <p>이를 위해 제공된 <mark><code>getRandomText(): Promise</code></mark> 함수를 사용해주세요. ('/src/random-text.js')</p>
      <p>이 랜덤 문자열은 <strong>3초마다 새로운 문자열로 갱신</strong>되야 하고, <strong>모든 곳에서 동일한 문자열</strong>이 표시되야 합니다.</p>
    </div>

    <div className="wrap-quiz">
      <h3>App.jsx 에서, "DescriptionComponent"를 제거하고 문제를 푸시면 됩니다.</h3>
    </div>

    <div style={{margin: '50px 0', backgroundColor: 'black', height: 1}}></div>

    


  </div>;
};

export default Goal;
