import React from "react";
import Corelayout from "../layout/corelayout";
import { Route } from "react-router-dom";
export default function PrivateRoute({ component, path }) {
  return (
    <Corelayout>
      <Route exact component={component} path={path} />
    </Corelayout>
  );
}
