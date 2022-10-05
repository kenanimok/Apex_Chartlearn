import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  background: ${(props) => (props.background ? props.background : `white`)};
  box-shadow: ${(props) =>
    props.isPdfReport ? "0px" : "0px 1px 16px #eaeaea"};
  border: ${(props) => (props.isPdfReport ? "1px solid #eaeaea" : "0px")};
  border-radius: 26px;
  color: ${(props) => (props.color ? props.color : `#1d1d42`)};
  padding: ${(props) => (props.padding ? props.padding : "20px")};

  .sub-title {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #b1b1b1;
    margin-left: 5px;
  }

  .col-button {
    display: flex;
    justify-content: end;
    display: -webkit-flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .col-center {
    display: flex;
    align-items: center;
  }

  .percent {
    font-size: 16px;
    font-weight: 500;
    margin-left: 18px;
    color: #40bea7;

    span {
      font-size: 16px;
      font-weight: 400;
      color: #b1b1b1;
    }
  }
`;
