import styled from "styled-components";
import { PRIMARY } from "../../helpers/color";

interface HeadingType {
  color?: string;
  size?: "xl" | "lg" | "md";
  className?: string;
  bordered?: boolean;
  children: any;
}
const Heading = (props: HeadingType) => {
  const { children, color, size, bordered, className } = props;
  return (
    <Heading.Wrapper
      className={className}
      size={size}
      color={color}
      bordered={bordered}
    >
      {children}
    </Heading.Wrapper>
  );
};

export default Heading;
Heading.Wrapper = styled.h2<HeadingType>`
  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  line-height: 80px;
  font-size: 64px;
  text-transform: capitalize;
  ${({ size }) => size === "xl" && "font-size: 96px"};
  ${({ size }) => size === "lg" && "font-size: 64px"};
  ${({ size }) => size === "md" && "font-size: 33px; line-height: 60px;"}
  color: ${({ color }) => (color ? color : PRIMARY)};
  ${({ bordered }) =>
    bordered &&
    `color: black;
  margin-left: 100px;
  margin-bottom: 70px;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;`}

  @media (max-width: 920px) {
    font-size: 40px;
    ${({ size }) => size === "xl" && "font-size: 50px"};
    ${({ size }) => size === "lg" && "font-size: 40px"};
    ${({ size }) => size === "md" && "font-size: 25px"};
    line-height: 60px;
    ${({ bordered }) =>
      bordered &&
      `color: black;
    margin-left: 10px;
    margin-bottom: 50px;
    -webkit-text-fill-color: white;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;`}
  }
`;
