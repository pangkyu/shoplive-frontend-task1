# shoplive-frontend-task 1

샵라이브 코딩 과제 - 1<br/>
수행기간 : 23.02.18 ~ 23.02.25

## UI

각각 브레이크 포인트를 두어 반응형으로 마크업했습니다.

<details>
<summary>PC VIEW (1025px~)</summary>

![](https://velog.velcdn.com/images/pangkyu/post/8dccaedd-19a1-4264-a595-807356555945/image.png)

![](https://velog.velcdn.com/images/pangkyu/post/3187b586-a0f4-454b-8c9a-606a3b531283/image.png)

</details>
<details>
<summary>Tablet VIEW (480px ~ 1024px)</summary>

![](https://velog.velcdn.com/images/pangkyu/post/146be13d-1ac9-432e-8fb5-1878e36daebe/image.png)

![](https://velog.velcdn.com/images/pangkyu/post/364b4f8c-8df4-4513-b80e-347f3b32dfdb/image.png)

</details>
<details>
<summary>Mobile VIEW (~480px)</summary>

![](https://velog.velcdn.com/images/pangkyu/post/3a37ac15-e3b7-4cd1-8032-7c7725faa610/image.png)

![](https://velog.velcdn.com/images/pangkyu/post/96eb86ea-75d2-468e-a832-34662077bd63/image.png)

</details>

## 기능

- pc, 테블릿, 모바일 사이즈에 맞춰 반응형 웹 구현
- 데이터를 로컬스토리지 내에 저장하여 최신 데이터가 출력되며 웹을 껐다가 다시 켜도 출력될 수 있도록 구현
- 아이템 추가 기능
  - 추가 버튼 클릭 시, title과 likeCount가 입력되지 않으면 다시 작성하라고 알림
  - 데이터가 입력되어 있을 시 랜덤한 이미지와 TIMESTAMP를 받아와 id, createdAt 설정
- 아이템 제거 기능
  - 제거 버튼 클릭 시, item.id를 받아와 로컬스토리지 내 키 값과 비교하여 일치하는 아이템 삭제
- 아이템 수정 기능
  - 저장 버튼 클릭 시, title이 입력되지 않으면 다시 작성하라고 알림(필수)
  - 이미지 교체하기 버튼을 누른다면 랜덤한 이미지를 출력할 수 있도록 설정(옵션)
  - 취소 버튼 클릭 시, 데이터 변경하지 않고 돌아가도록 설정
- 검색 기능
  - 검색 시, <code>match</code>를 이용하여 타이틀의 일부만 검색해도 화면에 출력되도록 구현
  - <code>?keyword=${data}</code> 주소창에 출력(주소창에 검색어 입력으로 검색되도록 하는 부분 미구현)
- 랜덤 문자열 기능
  - 8자리 랜덤 문자열 생성하여 아이템에 표시되도록 구현(동일 문자열표시 미구현)
  - 3초마다 새로운 문자열을 받아와 표시되로록 구현

## dependencies

```js
"@testing-library/jest-dom": "^5.11.4",
"@testing-library/react": "^11.1.0",
"@testing-library/user-event": "^12.1.10",
"node-sass": "^5.0.0",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^6.8.1",
"react-scripts": "4.0.3",
"recoil": "^0.7.6",
"web-vitals": "^1.0.1"
```
