import styled from "styled-components";
import { PRIMARY } from "../../helpers/color";
import Heading from "./Heading";

const Suscribe = () => {
  return (
    <Suscribe.Wrapper className="container">
      <div className="col-sm-8 mx-auto">
        <Heading className="text-center" size="md">
          Suscribe to our news letter
        </Heading>
        <div className="shadow rounded mt-4">
          <input className="text-box rounded" type="text" />
          <input
            className="submit rounded px-4"
            type="submit"
            value="Subscribe"
          />
        </div>
      </div>
    </Suscribe.Wrapper>
  );
};

export default Suscribe;
Suscribe.Wrapper = styled.div`
  height: 270px;
  .shadow {
    position: relative;
    .text-box {
      width: 100%;
      height: 60px;
      padding-left: 20px;
      border: none;
    }
    .submit {
      position: absolute;
      right: 0;
      height: 60px;
      border: none;
      background: ${PRIMARY};
      font-family: Mulish;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 153.5%;
      color: #ffffff;
    }
  }
  @media (max-width: 920px) {
    .shadow {
      position: relative;
      .text-box {
        width: 100%;
        height: 50px;
        padding-left: 20px;
        border: none;
      }
      .submit {
        position: absolute;
        right: 0;
        height: 50px;
        border: none;
        background: ${PRIMARY};
        font-family: Mulish;
        font-style: normal;
        font-size: 16px;
        line-height: 103.5%;
        color: #ffffff;
        padding-left: 5px;
        padding-right: 5px;
      }
    }
  }
`;
