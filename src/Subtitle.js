import styled from "styled-components";

const Wrapper = styled.span`
    color: #76885B;
    background-color: #F0F4C3;
`;

const Subtitle = ({text}) => {
    return (
        <Wrapper>
            {text}
        </Wrapper>
    );
};

export default Subtitle;