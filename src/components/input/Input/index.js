import * as I from "./input.style";

// import {
//   Checkbox,
//   DatePicker,
//   Password,
//   Radio,
//   Select,
//   Textarea,
//   Upload,
//   Video,
//   Editor,
//   MultipleUpload,
// } from 'components/input'

import React from "react";
import get from "lodash.get";

const CustomInputComponent = (props) => {
  const { label, name, errors, touched } = props;
  return (
    <I.InputContainer>
      <label htmlFor={name}>{label}*</label>
      <div className="input">
        <input {...props} />
        {/* {errors[name] && touched[name] ? (
          <Message>{errors[name]}</Message>
        ) : null} */}
      </div>
    </I.InputContainer>
  );
};

const Input = (props) => {
  const {
    label,
    name,
    type,
    placeholder,
    errors,
    touched: touches,
    form,
    required,
    disabled,
  } = props;
  // const value = get(form.values, name, '').trim()
  const value = get(form.values, name, "");
  const error = get(errors, name, "");
  const touched = get(touches, name, "");

  return (
    <I.InputContainer>
      <label htmlFor={name}>
        {label}
        {required && "*"}
      </label>
      <div className="input">
        <input
          type={type}
          name={name}
          autoComplete="off"
          placeholder={placeholder}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={value}
          disabled={disabled}
        />

        {/* {error && touched ? <Message>{error}</Message> : null} */}
      </div>
    </I.InputContainer>
  );
};

const InputComponent = (props) => {
  const typeInput = {
    input: <Input {...props} data-testid="test-input" />,
    // select: <Select {...props}>{props.children}</Select>,
    // checkbox: <Checkbox {...props} />,
    // textarea: <Textarea {...props} />,
    // text: <Input {...props} />,
    // email: <Input {...props} />,
    // password: <Password {...props} />,
    // date: <DatePicker {...props} />,
    // image: <Upload {...props} />,
    // radio: <Radio {...props} />,
    // video: <Video {...props} />,
    // editor: <Editor {...props} />,
    // multiple_upload: <MultipleUpload {...props} />,
  };

  if (typeInput[props.type] !== undefined) {
    return !props.hide && typeInput[props.type];
  } else {
    return <CustomInputComponent {...props} data-testid="test-custom-input" />;
  }
};

InputComponent.defaultProps = {
  type: "text",
  placeholder: "Input text",
};

export default InputComponent;
