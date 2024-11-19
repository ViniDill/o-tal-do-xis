import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  overflow-x: hidden;
  padding: 80px 25px 25px;

  ${media.lessThan("medium")`
    padding-top: 150px;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  
  & > div {
    flex-basis: calc(50% - 25px);
    max-width: calc(50% - 25px);
  }

  ${media.lessThan("medium")`
    & > div {
      flex-basis: 100%;
      max-width: 100%;
    }
  `}
`;
