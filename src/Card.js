import styled from "styled-components";

const Wrapper = styled.div`
    border: 8px solid #87a37f;
    border-radius: 20px;
    margin: 10px 0;
    padding: 20px;
    background-color: #A1C398;
`;

const Subject = styled.h1`
    color: #FEFDED;
`;
const Description = styled.h3`
    color: #C6EBC5;
    letter-spacing: 5px;
`;

const Card = ({subject, description}) => {
  return (
    <Wrapper>
      <Subject>{subject}</Subject>
      <Description>❤️{description}</Description>
    </Wrapper>
  );
};

export default Card;
