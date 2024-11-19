import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 10px;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Text = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  color: black;
  margin-bottom: 10px;
`;
