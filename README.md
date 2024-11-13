# 포켓몬 수집 사이트

react + redux + router을 사용하여 포켓몬 리스트를 보여주는 사이트입니다.
![pokemon-ezgif com-crop (1)](https://github.com/user-attachments/assets/3f376547-73b1-4bdb-a098-5b0cab0046a3)

## ✅ 기능

- 반응형
- 포켓몬 추가시 dashboard에 추가되고, 삭제시 dashboard에서 삭제됨
- 이미 포켓몬이 dahsboard에 있거나 dashboard에 6개가 초과됐을시 경고문이 뜸
- 포켓몬 카드 클릭시 detail페이지로 이동
- detail페이지에서 dashboard기준으로 추가됐다면 삭제버튼이, 없다면 추가버튼이 노출
- 데이터는 로컬스토리지에 저장되어 페이지 이동, 새로고침시에도 유지

## 📁 파일구조
```bash
src
 ┣ assets
 ┃ ┣ pikachuImg.png
 ┃ ┗ react.svg
 ┣ components
 ┃ ┣ DashBoard.jsx
 ┃ ┣ Header.jsx
 ┃ ┣ PokemonCard.jsx
 ┃ ┣ PokemonDetail.jsx
 ┃ ┗ PokemonList.jsx
 ┣ data
 ┃ ┗ mock_data.js
 ┣ pages
 ┃ ┣ Detail.jsx
 ┃ ┣ Dex.jsx
 ┃ ┣ Home.jsx
 ┃ ┗ NotFound.jsx
 ┣ redux
 ┃ ┣ pokemonSlice.js
 ┃ ┗ store.js
 ┣ styles
 ┃ ┣ GlobalStyle.js
 ┃ ┣ PokemonBall.js
 ┃ ┣ StyledButton.js
 ┃ ┣ StyledLinkToHome.js
 ┃ ┗ StyledSection.js
 ┣ App.jsx
 ┣ index.css
 ┗ main.jsx
```
- components/: 애플리케이션의 재사용 가능한 UI 컴포넌트들이 위치하는 폴더
  - DashBoard.jsx : 대시보드 컴포넌트, 사용자가 추가한 포켓몬들이 보여지는 역할
  - Header.jsx : 헤더부분을 구성하는 컴포넌트
  - PokemonCard.jsx: 각 포켓몬의 정보를 카드 형태로 표시하는 컴포넌트, PokemonDetail과 PokemonList에서 사용함
  - PokemonDetail.jsx: 포켓몬의 상세 정보를 보여주는 컴포넌트
  - PokemonList.jsx: 포켓몬 목록을 표시하는 컴포넌트
- pages/: 페이지를 구성하는 컴포넌트들이 위치하는 폴더
  - Detail.jsx: 포켓몬의 상세 페이지 컴포넌트
  - Dex.jsx: 포켓몬 도감 페이지
  - Home.jsx: 홈 페이지 컴포넌트
  - NotFound.jsx: 존재하지 않는 페이지를 처리하는 컴포넌트
- redux/: 리덕스 관련 파일들이 위치하는 폴더
  - pokemonSlice.js: 포켓몬 관련 상태 관리를 위한 슬라이스 파일
  - store.js: 리덕스 스토어 설정 파일
- styles/: 스타일 관련 파일들이 위치하는 폴더
