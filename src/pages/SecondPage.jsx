import { useEffect } from "react";
import {
  SecondWrapper,
  Ranking,
  RankingDes,
  RankingWrapper,
  RankingDesWrapper,
  Caution,
} from "../components/Second/Styled";
import Title from "../components/common/Title";

const SecondPage = () => {
  // State 작성 -------------------------------------------------------------

  // OPEN API 비동기로 불러와 state에 저장 및 불러오기 ---------------------------------
  // url은 `http://openAPI.seoul.go.kr:8088/${VITE_APP_API_KEY}/json/RealtimeCityAir/1/50/` 이걸 활용하기!
  // 미세먼지 농도가 가장 높은 3곳만을 가져오고 싶어요! 그렇다면 sort 메서드를 사용해주면 됩니다!
  // 어떻게? 이렇게!
  // const sortedData = response.data.RealtimeCityAir.row.sort(
  //      (a, b) => b.PM10 - a.PM10
  //    );

  //컴포넌트가 마운트될 때 한 번 실행되도록 -------------------------------------------------------------

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Title title={"지금 서울에서 미세먼지 농도가 가장 높은 지역 TOP 3"} />
      <SecondWrapper>
        {/* {데이터 저장할 state.length > 0 ? ( */}
        <>
          <RankingWrapper>
            <Ranking>1위: {}</Ranking>
            <Ranking>2위: {}</Ranking>
            <Ranking>3위: {}</Ranking>
          </RankingWrapper>

          <RankingDesWrapper>
            <RankingDes>
              1위인 "{}"의 현재 미세먼지 농도는 "{}"
            </RankingDes>
            <RankingDes>
              2위인 "{}"의 현재 미세먼지 농도는 "{}"
            </RankingDes>
            <RankingDes>
              3위인 "{}"의 현재 미세먼지 농도는 "{}"
            </RankingDes>
          </RankingDesWrapper>
          <Caution>마스크 꼭 쓰고 댕기세요 ~!</Caution>
        </>
        ) : (<p>데이터를 불러오는 중입니다...</p>
        )}
      </SecondWrapper>
    </>
  );
};

export default SecondPage;
