import styled from "styled-components";
import { Row } from "antd";
export const Title = styled.h1`
  font-family: Prompt;
  font-weight: 600;
  font-size: 28px;
  color: #1d1d42;
  margin-bottom: 30px;
`;
export const Container = styled.div`
  display: grid;
  gap: ${(props) => (props.gap ? `${props.gap}` : "20px")};
`;

export const Header = styled(Row)`
  .picker-mode {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ButtonExport = styled.button`
  width: ${(props) => (props.width ? `${props.width}px` : "166px")};
  height: ${(props) => (props.height ? `${props.height}px` : "54px")};
  background: ${(props) => (props.isLoading ? "lightgray" : "#23146c")};
  box-shadow: 0px 8px 16px rgba(35, 20, 108, 0.235883);
  border-radius: 16px;
  border: none;
  cursor: ${(props) => (props.isLoading ? "initial" : "pointer")};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: var(--white);
    width: 20px;
    height: 20px;
  }
`;
export const TextButton = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-left: 10px;
`;

export const PopulationTotal = styled.span`
  font-weight: 500;
  font-size: 40px;
  color: ${(props) => (props.color ? props.color : "white")};
  display: flex;
  justify-content: end;
`;

export const TextTitle = styled.span`
  margin-left: 18px;
  font-size: 18px;
  color: ${(props) => (props.color ? props.color : "white")};
  display: block;
  /* line-height: 22px; */
`;
export const BoxCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const CardReport = styled.div`
  width: 100%;
`;
