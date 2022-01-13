import styled from "styled-components";
import LAYOUT from "../../../helpers/layout";
// import bg from "../../../assets/images/gKlKsKaoZ7 1.png";

const HomePageWrapper = styled.div`
  display: flex;
  height: 100vh;
  .main {
    width: calc(100% - 273px);
    height: calc(100vh - 80px);
    margin-left: 273px;
    .container-fluid {
      height: calc(100vh - 100px);
      width: -webkit-fill-available;
      margin-top: 20px;
      overflow-y: scroll;
    }
  }
  @media (max-width: ${LAYOUT.xxLg}) {
    .main {
      width: 100vw;
      margin-left: 0;
    }
  }
`;

export default HomePageWrapper;
