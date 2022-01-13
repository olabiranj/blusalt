import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/avatar.png";
import LAYOUT from "../../helpers/layout";
import { PRIMARY } from "../../helpers/color";
import SideNav from "./SideNav";

const Sidebar = (props: { open: boolean }) => {
  return (
    <Sidebar.Wrapper open={props.open}>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="wema-logo" />
        </div>
        <hr />
        <SideNav />
      </div>
      <div className="bottom">
        <img src={avatar} alt="avatar" />
        <div>
          <p>Nafisa Sh.</p>
          <span>Support manager</span>
        </div>
      </div>
    </Sidebar.Wrapper>
  );
};

export default Sidebar;
Sidebar.Wrapper = styled.div<{ open: boolean }>`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 273px;
  z-index: 2;
  background: ${PRIMARY};
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s linear;
  .top {
    width: -webkit-fill-available;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    hr {
      opacity: 0.1;
      border: 1px solid #ffffff;
      margin-bottom: 30px;
    }
  }
  .bottom {
    width: -webkit-fill-available;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    display: flex;
    align-items: center;
    img {
      height: 48px;
      width: 48px;
      border-radius: 50%;
    }
    div {
      p {
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.75px;
        color: #ffffff;
        margin-bottom: -10px;
        padding: 0;
        margin-left: 5px;
      }
      span {
        margin-bottom: 0;
        padding: 0;
        line-height: 0;
        margin-left: 5px;
        font-size: 10px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
  @media (max-width: ${LAYOUT.xxLg}) {
    transition: all 0.3s linear;
    position: fixed;
    left: -273px;
    top: 0;
    z-index: 2;
    ${({ open }) => (open ? "left: 0px;" : "left: -273px;")}
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.06);
  }
  @media (max-width: ${LAYOUT.sm}) {
  }
`;
