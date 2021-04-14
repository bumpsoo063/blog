---
title: "[Flutter] 배달의 민족 앱 클론코딩해보기 1주차"
date: "2021-04-14"
category: "Dev"
---

# baemin_c

### 개인적으로 좋아하는 앱인 배달의 민족 클론코딩해보기.

### android emulator pixel 3 android 11에서만 테스트 진행.

### 이유는 모르겠지만 pixel 3 emulator에서 요소들 크기가 크게 보이는 현상이 있음(실제 기계와 상당히 많은 차이..)


# 4/3 ~ 4/9

### 만든 것들 :

### &nbsp;&nbsp;바운스 효과
 
&nbsp;&nbsp;PositionedTransition을 이용한 고르기
  
&nbsp;&nbsp;&nbsp;&nbsp;~~페이지가 바뀔 때 애니메이션 추가 해야 함~~ 완료
  
### &nbsp;&nbsp;광고 배너 양식
 
&nbsp;&nbsp;&nbsp;&nbsp;~~PageView를 사용하려 했으나 양 쪽 전부 다 스크롤 가능하게 하려면 많은 양의 작업이 필요할 거 같아서 Carousel 패키지 사용~~
 
&nbsp;&nbsp;&nbsp;&nbsp;~~Stack으로 몇번째 광고배너인지 표시해야함.~~ 완료 
    
&nbsp;&nbsp;&nbsp;&nbsp;~~decorationImage를 받아올 경우 backgroundColor를 버리고 image 를 적용하도록 설정해야함.~~ 완료
    
### &nbsp;&nbsp;오늘의 할인 
  
&nbsp;&nbsp;&nbsp;&nbsp;일단 SingleChildScrollView로 만들어서 수정이 필요함(다음 할인카드로 넘어갔을 때 고정이 안됨.)

&nbsp;&nbsp;&nbsp;&nbsp;Carousel이나 PageView사용하지 않는 이유 -> Viewport를 0.6으로 했을 경우 왼쪽으로 고정이 안됨 

&nbsp;&nbsp;&nbsp;&nbsp;결국 CustomScrollPhysics를 만들거나 PageView 혹은 Carousel을 수정해서 써야함. 전자가 더 편해보임

<hr>
   
### &nbsp;&nbsp;배달인지 포장인지 고르기

 ![배민_배달_포장](https://user-images.githubusercontent.com/78797081/114212811-33a07100-999d-11eb-82ff-4b41e64b4b95.gif)

 ![배달_포장](https://user-images.githubusercontent.com/78797081/114213028-75c9b280-999d-11eb-917c-cc88ef17c134.gif)

### &nbsp;&nbsp;광고 배너

 ![배민_광고_배너](https://user-images.githubusercontent.com/78797081/114213181-a4e02400-999d-11eb-98f2-d8d6a88668bf.gif)
 
 ![광고_배너](https://user-images.githubusercontent.com/78797081/114213145-9bef5280-999d-11eb-9425-637d365d016a.gif)
 
### &nbsp;&nbsp;바운스 효과
 
 ![배민_아이콘_바운싱](https://user-images.githubusercontent.com/78797081/114213189-a6a9e780-999d-11eb-947d-ac998e066a21.gif)
 
 ![아이콘_바운싱](https://user-images.githubusercontent.com/78797081/114213149-9d207f80-999d-11eb-8df2-24d2940377d7.gif)
 
### &nbsp;&nbsp;오늘의 할인
 
 ![배민_오늘의_할인](https://user-images.githubusercontent.com/78797081/114213193-a7427e00-999d-11eb-8a1a-040619a7fb8d.gif)
 
 ![오늘의_할인](https://user-images.githubusercontent.com/78797081/114213154-9e51ac80-999d-11eb-8d92-6bc6ec880137.gif)
 
 
### &nbsp;&nbsp;가장 고민되는 부분:
 
&nbsp;&nbsp;&nbsp;&nbsp;새로고침은 어떻게 만들어야 할지 모르겠다... 

&nbsp;&nbsp;&nbsp;&nbsp;일단은 RefreshIndicator로 해놨는데 이걸로는 못 할 거 같고 다른 방법을 찾아봐야겠다.

![새로고침](https://user-images.githubusercontent.com/78797081/114215702-df978b80-99a0-11eb-92fd-fce714e8c7ce.gif)