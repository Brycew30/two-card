import styled from "styled-components";

const Background = styled.section`
  align-items: center;
  background: ${(props) => props.theme.colors.darkerGreen};
  background: ${(props) =>
    `radial-gradient(circle, ${props.theme.colors.darkGreen} 25%, ${props.theme.colors.darkerGreen} 95%)`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export default Background;
