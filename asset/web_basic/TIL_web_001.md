# HTML 기본 사용하는 방법

> 2022. 03. 05 : html과 css의 기초 사용법 이해
---

## web을 설정하는 언어
우리가 알고 있는 화면에 보이는 웹페이지는 기본 3개의 언어로 구성이 되어있다.

- HTML : 화면의 구성형태 
  - ex) 방 개수 거실 주방 
- CSS : 화면의 표현되는 디자인 
  - ex) 방1의 크기, 방향, 방 2의 벽지 색상
- Java-script : 화면에 표현되어있는 내용을 제어 
  - ex) 방 1,2를 합쳐서 방1로 재구성, 벽지 색상을 변경, 복층개조, 미닫으로 변경 등 

---
대부분의 기능들이 js로 처리가 가능하기 때문에 시간이 지나면 html로 하기보다 js로 처리하는 경우가 늘어남

---
### markdown과 html의 관계?
html문서를 보기 쉽게 사용하기 편리하게 개량한 것이 markdown  <br />
보다 전문성있게 디테일하게 작업하기 위해서는 HTML을 이용해야 한다.

---

### HTML 기본 형태
``` html
<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="UTF-8">
    <title>현재페이지 제목</title>
  </head>
  <body></body>
</html>
```

```
손코딩하는방법
<html>                                            ...</html>---
  <head>                                          ...</head>---
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body></body>
</html>
```