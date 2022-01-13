import styled from "styled-components";

const TextArea = ({
  label,
  value,
  fullWidth,
  required,
  readOnly,
  name,
  placeholder,
  ref,
  onChange,
}: any) => {
  return (
    <TextArea.Wrapper fullWidth={fullWidth}>
      <label>
        {label} <span className="text-danger">{required && "*"}</span>{" "}
      </label>
      <textarea
        ref={ref}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e)}
        className="form-control px-4"
        readOnly={readOnly}
        required={required}
        name={name}
        value={value}
      ></textarea>
    </TextArea.Wrapper>
  );
};

TextArea.Wrapper = styled.div<any>`
  margin-bottom: 40px;
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
  textarea {
    width: ${(props) => (props.fullWidth ? props.fullWidth : "500.3px")};
    height: 152.4px;
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
  }
  @media (max-width: 1280px) {
    input {
      width: 100%;
    }
  }
  @media (max-width: 520px) {
    margin-bottom: 0;
    label {
      font-size: 13px !important;
    }
    textarea {
      width: 100%;
      height: 100px;
      padding-left: 5px;
      font-size: 13px;
    }
  }
`;
export default TextArea;
