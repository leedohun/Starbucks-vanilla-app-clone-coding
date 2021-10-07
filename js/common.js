const searchEl = document.querySelector('.search');       // HTML에서 요소 search class 검색 / 할당
const searchInputEl = searchEl.querySelector('input');    // searchEl에서 요소 input class 검색 / 할당

searchEl.addEventListener('click', function () {          // searchEl 누르면 event 발생
  searchInputEl.focus();                                  // seachInputEl에 js를 통해 focus를 강제 적용
});

searchInputEl.addEventListener('focus', function () {       // searchInputEl에 focus가 발생
  searchEl.classList.add('focused');                        // 특정 요소에 Class 정보를 가지고 있는 객체에서 Class 내용을 추가
  searchInputEl.setAttribute('placeholder', '통합검색');     // searchInputEl에 어떤 HTML속성을 지정
});

searchInputEl.addEventListener('blur', function () {        // searchInputEl에 focus가 해제 됐을 때 발생
  searchEl.classList.remove('focused');                     // 특정 요소에 Class 정보를 가지고 있는 객체에서 Class 내용을 추가
  searchInputEl.setAttribute('placeholder', '');            // searchInputEl에 어떤 HTML속성을 지정
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //올해 년도 삽입
