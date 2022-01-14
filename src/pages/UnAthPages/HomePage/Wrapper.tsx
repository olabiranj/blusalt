import styled from "styled-components";
import LAYOUT from "../../../helpers/layout";
// import bg from "../../../assets/images/gKlKsKaoZ7 1.png";

const HomePageWrapper = styled.div`
  display: flex;
  height: 100vh;
  .main {
    margin-top: 100px;
    width: calc(100% - 273px);
    height: calc(100vh - 80px);
    margin-left: 273px;
  }
  @media (max-width: ${LAYOUT.xxLg}) {
    .main {
      width: 100vw;
      margin-left: 0;
    }
  }
`;

export default HomePageWrapper;
