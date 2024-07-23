import {useEffect, useState} from "react";
import axios from "axios";
import * as S from "./Styled";

const NewsList = () => {
  const[news, setNews] = useState([]);

  const fetchData = async() => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      );
      console.log(response);
      setNews(response.data.articles);
    }
    catch(error) {
      console.log("에러!");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <S.Main>
        <S.Title>멋사 NEWS</S.Title>
        <S.Select>
          <S.Button onClick={fetchData}>전체</S.Button>
          <S.Button>스포츠</S.Button>
          <S.Button>연애</S.Button>
          <S.Button>경제</S.Button>
        </S.Select>
        {news.map((post) => (
          <S.NewsWrapper key={post.url}>
            {post.urlToImage ? <S.Image src={post.urlToImage} /> : null}
            {post.title}
            {post.author}
          </S.NewsWrapper>
        ))}
      </S.Main>

    </>
  )
};

export default NewsList;
