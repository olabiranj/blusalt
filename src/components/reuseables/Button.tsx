import styled from "styled-components";
import { PRIMARY } from "../../helpers/color";

interface ButtonTypes {
  label?: string;
  func?: any;
  fullwidth?: boolean;
  styleClass?: string;
  bg?: string;
  border?: boolean;
  disabled?: boolean;
  loading?: boolean;
  text?: string;
  type?: string;
}
const Button = (props: ButtonTypes) => {
  const {
    label,
    func,
    fullwidth,
    styleClass,
    bg,
    border,
    disabled,
    loading,
    text,
    type,
  } = props;
  return (
    <Button.Wrapper fullwidth={fullwidth} bg={bg} border={border} text={text}>
      <input
        type={type ? type : "button"}
        className={` ${styleClass} my-2`}
        value={loading ? "Loading..." : label}
        disabled={disabled}
        onClick={(e) => func && func(e)}
      />
    </Button.Wrapper>
  );
};

Button.Wrapper = styled.div<ButtonTypes>`
  input {
    width: 200px;
    padding: 12px 30.2px;
    ${(props) => props.fullwidth && "width: -webkit-fill-available;"}
    border-radius: 0;
    background-color: ${(props) => (props.bg ? props.bg : PRIMARY)};
    color: ${(props) => (props.text ? props.text : "#ffffff")};
    outline: none;
    font-family: Mulish;
    border: 2px solid ${(props) => (props.bg ? props.bg : PRIMARY)};
    ${(props) =>
      props.border &&
      `
        border: 2px solid ${props.bg ? props.bg : PRIMARY};
        color: ${props.bg ? props.bg : PRIMARY};
        background-color: inherit;
    `};
    :hover {
      opacity: 0.8;
    }
  }
  @media (max-width: 520px) {
    input {
      padding: 7px 20.2px;
      width: 150px;
      ${(props) => props.fullwidth && "width: -webkit-fill-available;"}
    }
  }
`;
export default Button;
