# IMUNGCARE  <img src="etc/logo.png" height="70"> 

### 소개
- 결과물 구동은 [시연동영상](/etc/아이멍케어_시연동영상.mp4) 참고
- 교내캡스톤에서 교수님의 추천으로 공학캡스톤디자인 경진대회 출품
- [아이멍케어 작품 보고서](/etc/아이멍케어_작품보고서.hwp)
### 개요
- 한번 잃어버리면 찾기 힘든 유기견을 GPS를 통해 쉽게 추적 가능
- 애플리케이션을 사용 중인 다른 사용자들이 자신의 반경 내에 있는 유기견 구조 가능
- 자신의 반경 내에 있는 반려동물의 편의시설 표시
- 길 찾기 서비스 제공으로 편리하게 이용 가능

### 특징
1. 주변 반려동물 편의 시설 제공
    - 한 눈에 알아보기 쉽게 별도의 마커를 통해 시설 위치 파악 가능
2. 유기동물 및 편의 시설로의 길 찾기 기능 제공
    - 보다 편리한 경로 설정을 위해 대중교통 길 안내
3. 유기동물의 실시간 위치 제공
    - 한번 잃으면 찾기 힘든 유기동물의 문제점을 GPS를 통해 해결
4. 디자인적으로 우수한 UI
    - 직관성을 높여 누구 사용하기 쉬운 UI
    
## 다운로드 후 실행

### npm 모듈 및 Android 플랫폼 설치

```
npm install
npm run build-dev-cordova-android
framework7 cordova platform add android
```

### Firebase google-services.json 파일 추가

```
https://console.firebase.google.com/
cordova/platforms/android/app 경로에 추가
```

## 실행 

### 로컬에서 개발 서버 실행

```
npm start
```

### 스마트폰에서 실행 - 개발

```
npm run build-dev-cordova-android
framework7 cordova run android
```

### 스마트폰에서 실행 - 배포

```
npm run build-prod-cordova-android
framework7 cordova run android
```

## Firebase

### 시작하기

[자바스크립트 프로젝트에 Firebase 추가](https://firebase.google.com/docs/web/setup?hl=ko)

### Auth

[웹사이트에서 Firebase 인증 시작하기](https://firebase.google.com/docs/auth/web/start?hl=ko)

[Firebase에서 사용자 관리하기](https://firebase.google.com/docs/auth/web/manage-users)

### Cloud Firestore

[Cloud Firestore 시작하기](https://firebase.google.com/docs/firestore/quickstart?hl=ko)

[Cloud Firestore에 데이터 추가](https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko)

### 샘플

[Firebase 샘플](https://firebase.google.com/docs/samples/?authuser=0)
