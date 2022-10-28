import React from "react";
import { Container } from "./list.style";
import Tablepage from "../table";
import Corelayout from "../../../components/layout/corelayout/corelayout";

const List = () => {
  return (
    <>
      <Corelayout>
        <Container>
          <Tablepage />
          {/* 
          <div className="table-container">
            <Tablepage />
          </div> */}
        </Container>
      </Corelayout>
    </>
  );
};

export default List;
