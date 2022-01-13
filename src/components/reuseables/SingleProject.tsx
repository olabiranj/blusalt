import styled from "styled-components";
import more from "../../assets/images/logo.svg";
import { useState } from "react";
import Heading from "./Heading";

const SingleProject = ({ bgImg, title, content }: SingleProjectType) => {
  const [show, setShow] = useState(false);
  return (
    <div className="col-md-6 mb-4">
      <SingleProject.Wrapper show={show} bgImg={bgImg}>
        {show ? (
          <div className="second p-3">
            <img src={more} alt="more" onClick={() => setShow(false)} />
            <Heading size="md" color="#ffffff">
              {title}
            </Heading>
            <p className="text-light">{content}</p>
          </div>
        ) : (
          <div className=" first">
            <img src={more} alt="more" onClick={() => setShow(true)} />
          </div>
        )}
      </SingleProject.Wrapper>
    </div>
  );
};

SingleProject.Wrapper = styled.div<{ show: boolean; bgImg: string }>`
  min-height: 300px;
  background-image: url("${({ bgImg }) => bgImg}");
  ${({ show }) =>
    show && "box-shadow: inset 0 0 0 2000px rgba(6, 104, 164, 0.8);"}
  background-size: cover;
  .first {
    position: relative;
    min-height: inherit;
    img {
      position: absolute;
      bottom: 10px;
      left: 10px;
      cursor: pointer;
      transition: all 0.2s linear;
      :hover {
        transform: scale(1.5);
      }
    }
  }
  .second {
    position: relative;
    min-height: inherit;
    img {
      position: absolute;
      bottom: 10px;
      left: 10px;
      cursor: pointer;
      transition: all 0.2s linear;
      transform: rotate(135deg);
      :hover {
        // transform: scale(1.5);
      }
    }
    p {
      font-family: Mulish;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 30px;
      color: #000000;
    }
  }
`;

export default SingleProject;
