# 봉투
배포주소 - > https://vigorous-kepler-f3d9fb.netlify.com/  
봉사 뭐시기 서비스

## 어떻게
1. 봉사활동, 잘잘잘, 뭐 태그 기능
2. 잘 검색기능, 리다이렉트 
3. 잘 봉사리뷰 


## 기술스택
### 프론트엔드
* Node.js & js : 사용한 언어
* Vue.js : 기본 프레임워크 
* Vue-router : router 기능을 위해 사용 
* Vuex : 전역 상태 관리를 위해 사용 
* axios : ajax를 쉽게 사용하기 위해 사용
* vue-cookie : cookie를 쉽게 사용하기 위해 사용
* storybook : UI 컴포넌트를 문서화 하기위해 사용
* element-ui : {modal, selector, uploader}를 구현하는 시간을 단축하기 위해 사용

### 배포
* aws EB 사용함 : 요금 많이 나와서 지움
* netlify : 무료에다가 배포하기 편해서 현재 사용 중

### 백엔드
* python
* django
* djangorestframework : REST API 설계를 위해 사용 
* corsheader : CORS 이슈처리하기 위해 사용 
* django all-auth : jwt로 로그인하기 위해 사용함 
* django jwt : jwt를 사용하기 위해 사용함

### 배포
* aws EB : 요금 많이 나와서 지움
* heroku : 무료라 사용 중 