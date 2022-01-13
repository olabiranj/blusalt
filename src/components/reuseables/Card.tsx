import React from "react";
import styled from "styled-components";

const Card = (props: any) => {
  return (
    <CardWrapper className="col-sm-6 col-md-6 col-lg-3">
      <div className="inner">
        <img src={props.img} alt="img" />
        <div>
          <h3>{props.value}</h3>
          <h5>{props.label}</h5>
          <h6>
            <span>
              <img src={props.line} alt="graph" />{" "}
            </span>
            <span className="text-success mx-2"> {props.ratio}</span> Last month
          </h6>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  padding: 15px;
  .inner {
    background: #ffffff;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    padding: 15px;
    display: flex;
    div {
      margin-left: 15px;
      h3 {
        font-weight: 500;
        font-size: 22px;
        line-height: 29px;
        display: flex;
        align-items: center;

        color: #171717;
      }
      h5 {
        font-size: 13px;
        display: flex;
        font-weight: 300;
        align-items: center;

        /* Gray 3 */

        color: #aaaaaa;
        margin-bottom: 20px;
      }
      h6 {
        font-size: 12px;
        font-weight: 300;
        display: flex;
        align-items: center;

        /* Gray 4 */

        color: #bdbdbd;
      }
    }
  }
  @media screen and (max-width: 590px) {
  }
`;
