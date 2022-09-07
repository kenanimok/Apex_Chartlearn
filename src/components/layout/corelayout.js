import Sider from "antd/lib/layout/Sider";
import React from "react";
import styled from "styled-components";
import Sidebar from "../nav";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  transition: width 0.3s;

  .container {
    width: 100%;
    padding: ${(props) => (props.padding === false ? 0 : "35px")};
    height: 91%;
    /* overflow-x: hidden;
    overflow-y: auto; */
    margin-top: 5px;
  }
`;

export const Title = styled.h1`
  margin: 2% 0;
  font-size: 2.5rem;
  color: #000;
`;

export default function Corelayout(props) {
  const { padding, title } = props;

  return (
    <>
      <Container>
        <Layout padding={padding}>
          <div className="container">
            {title && <Title>{title}</Title>}
            {props.children}
          </div>
        </Layout>
      </Container>
    </>
  );
}
