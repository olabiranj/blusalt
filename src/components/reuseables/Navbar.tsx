import styled from "styled-components";
import notification from "../../assets/icons/Group 6.svg";
import theme from "../../assets/icons/Group 7.svg";
import search from "../../assets/icons/icon-search.svg";
import avatar from "../../assets/images/avatar.png";
import { SECONDARY } from "../../helpers/color";
import LAYOUT from "../../helpers/layout";

interface BurgerType {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}
interface NavbarBurgerType extends BurgerType {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  navRef: any;
}

// hambuger menu
const Burger = ({ open, setOpen }: BurgerType) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
const StyledBurger = styled.button<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.8rem;
  height: 1.8rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.8rem;
    height: 0.2rem;
    background: #990d81;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-of-type(2) {
      // opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(-4px)" : "translateX(0)")};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const Navbar = ({ open, setOpen, navRef }: NavbarBurgerType) => {
  return (
    <Navbar.Wrapper ref={navRef}>
      <div className="nav-left">
        <div className="menu-container">
          <Burger open={open} setOpen={setOpen} />
        </div>
        <h3>Dashboard</h3>
      </div>
      <div className="nav-right">
        <div className="search">
          <img src={search} alt="search" />
          <input type="text" placeholder="Enter keywords ..." />
        </div>
        <img src={theme} alt="theme" />
        <img src={notification} alt="notification" />
        <img src={avatar} alt="avatar" />
      </div>
    </Navbar.Wrapper>
  );
};

export default Navbar;
Navbar.Wrapper = styled.div`
  width: -webkit-fill-available;
  height: 80px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  background: #ffffff;
  .nav-left {
    display: flex;
    .menu-container {
      display: none;
    }
    h3 {
      font-weight: bold;
      font-size: 24px;
      color: ${SECONDARY};
      margin-left: 20px;
    }
  }
  .nav-right {
    display: flex;
    .search {
      width: 271px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fafafa;
      border-radius: 6px;
      img {
        width: 16px;
        height: 16px;
      }
      input {
        width: -webkit-fill-available;
        border: none;
        font-size: 14px;
        background: inherit;
        color: ${SECONDARY};
        margin-left: 10px;
        ::placeholder {
          font-size: 14px;
          color: #d6d7e3;
        }
      }
    }
    img {
      border-radius: 50%;
      margin-left: 15px;
      height: 36px;
      width: 36px;
      cursor: pointer;
    }
  }
  @media (max-width: ${LAYOUT.xxLg}) {
    .nav-left {
      .menu-container {
        display: block;
      }
    }
  }
  @media (max-width: ${LAYOUT.sm}) {
    .nav-right {
      .search {
        display: none;
      }
    }
  }
`;
