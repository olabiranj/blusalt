import styled from "styled-components";

const TextInput = ({
  label,
  value,
  fullWidth,
  onChange,
  readOnly,
  name,
  required,
  placeholder,
  rounded,
  onBlur,
  ref,
  type,
}: any) => {
  return (
    <TextInput.Wrapper type={type} fullWidth={fullWidth} rounded={rounded}>
      <label>
        {label}
        <span className="text-danger">{required && "*"}</span>{" "}
      </label>
      <input
        type={type ? type : "text"}
        name={name}
        ref={ref}
        placeholder={placeholder}
        value={value}
        onBlur={(e) => onBlur && onBlur(e)}
        onChange={(e) => onChange && onChange(e)}
        className="form-control px-3"
        readOnly={readOnly}
        required={required}
      />
    </TextInput.Wrapper>
  );
};

TextInput.Wrapper = styled.div<any>`
  margin-bottom: 50px;
  postion: relative;
  label {
    font-family: Mulish;
    font-style: normal;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    color: rgba(0, 0, 0, 0.7);
    background: white;
    padding: 5px 10px;
    position: absolute;
    top: 8px;
  }
  input {
    width: ${(props) => (props.fullWidth ? props.fullWidth : "500.3px")};
    height: 52.4px;
    border-radius: 0;
    border: 1px solid rgba(114, 114, 114, 0.5);
    background-color: #ffffff;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: 0.14px;
    text-align: left;
    color: #808181;
    outline: none;
  }

  @media (max-width: 1280px) {
    input {
      width: 100%;
    }
  }
  @media (max-width: 520px) {
    margin-bottom: 20px;
    label {
      font-size: 13px !important;
    }
    input {
      width: 100%;
      height: 40px;
      font-size: 13px;
    }
  }
`;
export default TextInput;
