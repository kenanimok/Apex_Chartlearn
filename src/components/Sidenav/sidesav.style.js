import styled from "styled-components";

export const Siderbars = styled.div`
  background: ${(props) => (props.type === "primary" ? "#fff" : "red")};
  color: ${(props) => (props.type === "primary" ? "var(--primary)" : "#fff")};
  padding: ${(props) => (props.type === "primary" ? "0px" : "0 10px")};
  flex: ${(props) => `0 0 ${props.width}px` || "0 0 70px"};
  min-width: ${(props) => props.width + "px" || "70px"};
  max-width: ${(props) => props.width + "px" || "70px"};
  width: ${(props) => props.width + "px" || "70px"};
  overflow: hidden auto;
  position: relative;
  transition: flex 0.2s, min-width 0.2s, max-width 0.2s, width 0.2s;
  z-index: 1;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  .logo img {
    max-width: 40px;
  }

  &.full {
    flex: ${(props) => `0 0 ${props.fullWidth}px` || "0 0 200px"};
    min-width: ${(props) => props.fullWidth + "px" || "200px"};
    max-width: ${(props) => props.fullWidth + "px" || "200px"};
    width: ${(props) => props.fullWidth + "px" || "200px"};
  }
`;
