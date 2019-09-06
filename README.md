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

## 사이트맵 
### 홈 페이지 
![홈 ](https://user-images.githubusercontent.com/26789506/64342125-d015cb00-d024-11e9-8dc6-9a858891d8d6.png)
### 카테고리 선택 페이지 : 리뷰작성이나 회원가입에서 사용되는 페이지 
![카테고리 페이지](https://user-images.githubusercontent.com/26789506/64342122-cf7d3480-d024-11e9-96cf-d84641ffe700.png)
### 리뷰 작성하기 페이지 
![작성하기 페이지](https://user-images.githubusercontent.com/26789506/64342123-cf7d3480-d024-11e9-937d-b7504487886b.png)
### 검색 페이지
![검색 페이지](https://user-images.githubusercontent.com/26789506/64342524-aad58c80-d025-11e9-89ef-52261021795f.png)
### 유저 정보 페이지
![유저 상세 페이지 ](https://user-images.githubusercontent.com/26789506/64342118-cee49e00-d024-11e9-95ef-7a642ab8720a.png)

## 기능
### 주소를 감지하는 실시간 필터
![필터](https://user-images.githubusercontent.com/26789506/64342119-cf7d3480-d024-11e9-9734-8f835e6fc30b.png)
![주소](https://user-images.githubusercontent.com/26789506/64342120-cf7d3480-d024-11e9-9c64-8022d04255e4.png)

필터를 해쉬(#)뒤에 있는 query를 감시하여 주소를 변경하면 바로 필터가 바로 변경을 감지  
하고 봉사정보를 다시 불러온다.

> 구현한 이유 : 주소가 페이지를 상태를 나타내기 위해, 현재 주소를 복사해서 다른 사람에게 전송할 때 같은 데이터를 전달하고 싶었기 때문임.

### 리뷰 모달 
![리뷰 상세 모달](https://user-images.githubusercontent.com/26789506/64342124-d015cb00-d024-11e9-93d0-d3092655f935.png)  
리뷰는 검색의 부차적인 요소 때문에 리뷰 글을 클릭하기 위해 페이지를 바꾸지 않기위해, 팝업창을 구현함.  
리뷰에는 좋아요와 리플을 구현함.

### 검색페이지 
![검색 페이지 2](https://user-images.githubusercontent.com/26789506/64342526-aad58c80-d025-11e9-8de6-67dc703088cd.png)

검색하기를 누르면 크롤링한 원본 주소로 리다이렉트 된다.  아래 플러스를 클릭하면 계속 페이지를 불러온다. 

## 백엔드 저장소  

https://github.com/bongtoo/bongtoo_restapi