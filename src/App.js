/* eslint-disable */ 

import React , { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '박스오피스 순위']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목 , 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');


  // function 제목바꾸기(){
  //   var newArray = [...글제목];
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경( newArray );
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={ 제목바꾸기 }>버튼</button> */}
      
      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h3 onClick={ ()=>{ 누른제목변경(i) } }> { a } <span onClick={ ()=>
                { 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
              <p>2월 18일 발행</p>
              <hr/>
            </div>
          )
        })
      }
      {/* <button onClick={ ()=>{ 누른제목변경(0) } }>버튼1</button>
      <button onClick={ ()=>{ 누른제목변경(1) } }>버튼2</button>
      <button onClick={ ()=>{ 누른제목변경(2) } }>버튼3</button> */}

      {/* <input onChange={ (e)=>{ 입력값변경( e.target.value) } } /> */}

      <button onClick={ ()=>{ modal변경(!modal) } }>열고닫기</button>
      {
        // 삼향연산자 
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }
      
    </div>
  );
}

function Modal(props){
  return(
    <>
      <div className='modal'>
        <h2>{ props.글제목[props.누른제목] }</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;
