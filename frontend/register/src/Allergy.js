import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Common.css";

function Allergy() {
    const navigate = useNavigate(); // useNavigate hook to get the navigate function
    const location = useLocation();
    const PhoneNumber = location.state.PhoneNumber;
    const inputValue = location.state.inputValue;
    const VegancheckboxValue = location.state.VegancheckboxValue;
    const ReligioncheckboxValue = location.state.checkedBox;


    //서버로 사용자의 입력값을 보내준다.
    const handleButtonClick = () => {
      const postData = {
        user_name : inputValue,
        user_phonenum : PhoneNumber
      };

      axios.post('http://127.0.0.1:8000/api/', postData) //서버 URL 넣을 장소에 테스트할 서버 URL을 넣어주면 된다.
      .then(response => {
          console.log(response.data);  // 응답 데이터 출력 (선택사항)
      })
      .catch(error => {
          console.error(error);
      });
    };

    return (
      <div>
        <set>
          <header>Easy KIOSK</header>
          <body>이곳이 마지막 페이지 <br />사용자명 : {inputValue} <br /> 전화번호 : {PhoneNumber} <br /> 비건 체크박스 : {VegancheckboxValue} <br /> 종교 체크박스 : {ReligioncheckboxValue}</body>
          <footer>
            <div className="blinking-text">나의 정보를 등록하세요 4/6</div>
            <button className = "next-button" onClick={(handleButtonClick)}>등록</button> {/* Button to navigate to the next page */}
          </footer>
        </set>
      </div>
    )
}
export default Allergy;