import Title from "./Title";
import Subtitle from "./Subtitle";
import Card from "./Card";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 10%;
`;

function App() {
  return (
    <Wrapper>
      <Title text="한줄요약"/>
      <Subtitle text="주제를 한줄로 요약해보는 서비스에용"/>
      <Card subject="실리카겔" description="kyo야 사랑을 해봤니"/>
      <Card subject="잔나비" description="초록을 거머쥔 우리는 여름으로"/>
      <Card subject="검정치마" description="난 너랑 있는게 제일 좋아"/>
    </Wrapper>
  );
}

export default App;



