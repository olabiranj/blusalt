import { Link } from "react-router-dom";
import styled from "styled-components";

const Navlink = ({ link }: { link: sideLinkType }) => {
  return (
    <NavlinkWrapper isActive={window.location.pathname === link.link}>
      <Link to={link.link}>
        {<link.icon />}
        <span>{link.name}</span>
      </Link>
    </NavlinkWrapper>
  );
};

export default Navlink;

const NavlinkWrapper = styled.li<{ isActive: boolean }>`
  border-radius: 5px;
  padding: 3px 15px;
  margin-bottom: 15px;
  ${(props) => props.isActive && "background: rgba(255, 255, 255, 0.1);"}
  ${(props) => props.isActive && "border-right: 3px solid rgb(255, 255, 255);"}
  a {
    text-decoration: none;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 34px;
    /* identical to box height, or 243% */
    color: #ffffff;
    display: flex;
    align-items: center;
    font-weight: 200;
    span {
      ${(props) => props.isActive && "font-weight: 500;"}
      margin-left: 10px;
    }
  }
  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
