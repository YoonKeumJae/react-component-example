import styled from "styled-components";

const Wrapper = styled.h1`
    color: #627254;
`;

const Title = ({text}) => {
    return (
        <Wrapper>
            ~ {text} ~
        </Wrapper>
    );
};

export default Title;