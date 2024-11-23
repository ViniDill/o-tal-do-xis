import styled from "styled-components";
import media from "styled-media-query";
import Theme from "../../Theme";

export const Container = styled.div`   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  background-color: ${Theme.colors.neutrals20};

`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding: 50px;
  justify-content: center;
  align-items: center;

  ${media.lessThan("medium")`
    gap: 20px;
    padding: 20px;
  `}
`;

export const Title = styled.div`
  height: 250px;
  background-color: ${Theme.colors.Color3};
  margin-top: 80px;
  padding: 40px;
  width: 100%;

  ${media.lessThan("medium")`
    padding: 20px;
  `}

  h1 {
    font-size: 64px;
    color: ${Theme.colors.neutrals70};
    font-weight: 800;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

    ${media.lessThan("medium")`
      font-size: 44px;
      text-align: center;
    `}
  }

  p {
    font-size: 24px;
    color: ${Theme.colors.neutrals70};

    ${media.lessThan("medium")`
      font-size: 16px;
      text-align: center;
    `}
  }
`;