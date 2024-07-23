import {useEffect, useState} from "react";
import axios from "axios";
import { BtnWrapper, BtnContainer } from "../First/Styled";

const ThirdApi = () => {
  //state 작성
  const {VITE_NEWS_API_KEY} = import.meta.env;
  const [news, setNews] = useState([]);
  //OPEN API 비동기로 불러와 state에 저장 및 불러오기
  //이때의 url은 https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}
  const fetchData = async() => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
    );
    console.log(response);
  }
    catch(error) {
      console.log("에러!");
    }
  }

  useEffect(() => {
    fetchData();
  }, []); //사이트에 들어오자마자 fetchData를 불러오기 위해서 useEffect를 사용한다.//

  return (
    <>
      <BtnWrapper>
        <BtnContainer onClick={fetchData}>
          데이터 GET해보기! <br />
        </BtnContainer>
      </BtnWrapper>
    </>
  );
};

export default ThirdApi;
