# README

## 폴더 구조

| public | Description |
| --- | --- |
| fonts | 폰트 글꼴 파일 (ex: .ttf) |
| images | 이미지 파일 (ex: .png, .jpg) |
| svgs | svg 파일 |

| src | Description |
| --- | --- |
| app | 라우팅 페이지 (라우팅 관련 파일만) |
| components | 여러 페이지 공통으로 사용하는 상수값 |
| constants | 상수 데이터 |
| hooks | 공통 hooks |
| lib | 외부 라이브러리 |
| services | API요청 (fetch) |
| styles | 공통 스타일 scss 관련|
| types | 각종 타입스크립트 타입 정의 (ex: interface) |
| utils | 공통으로 사용하는 유틸성 함수 (ex 데이터 날짜변환 yyyy-mm-dd) |


| app | Description |
| --- | --- |
| page.tsx | app폴더 최상단 파일은 메인 페이지 ('/') |
| layout.tsx | app폴더 최상단 파일은 레이아웃 페이지 ('/') |
| (user) | 페이지 분류 폴더 (라우팅x) ex: user, whisper, market |
| login | 로그인페이지 폴더 ('/login') |

| styles | Description |
| --- | --- |
| _colors.scss | 공통 색상 변수 |
| _mixins.scss | 재사용할 scss 선언 그룹 |
| _variables.scss | 색상을 제외한 공통 변수 (ex 폰트 크기)  |
| _globals.scss | 공통 scss (app/layout.tsx에 적용)|