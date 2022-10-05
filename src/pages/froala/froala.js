import React from "react";
import ReactDOM from "react-dom";

// Require Editor plugin files.
import "froala-editor/js/plugins.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { useState } from "react";

import FroalaEditor from "react-froala-wysiwyg";

function Froala_t() {
  const [val, setVal] = React.useState("initial text");
  const handleChange = (html) => {
    console.log(html);
    setVal(html);
  };
  return (
    <div className="App">
      <FroalaEditor model={val} onModelChange={handleChange} tag="textarea" />
    </div>
  );
}

export default Froala_t;
