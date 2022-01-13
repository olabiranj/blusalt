import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import client1 from "../../assets/images/logo.svg";
import { useRef } from "react";

const Posts = () => {
  const scrollRef = useRef<HTMLDivElement | any>(null);

  return (
    <Posts.Wrapper>
      <div className="container">
        <Heading size="md">Latest Posts</Heading>
        <div className="row pt-4" ref={scrollRef}>
          <div className="col-6 col-sm-6 col-lg-4">
            <img src={client1} alt="client 1" />
            <p>Stories, Media 5min read</p>
            <h5 className="mt-3 mb-2 mt-0">
              Top Skills First - Year UX Designer Should Master
            </h5>
            <Button label="Read more" styleClass="rounded" border />
          </div>
          <div className="col-6 col-sm-6 col-lg-4">
            <img src={client1} alt="client 1" />
            <p>Stories, Media 5min read</p>
            <h5 className="mt-3 mb-2 mt-0">
              Top Skills First - Year UX Designer Should Master
            </h5>
            <Button label="Read more" styleClass="rounded" border />
          </div>
          <div className="col-6 col-sm-6 col-lg-4">
            <img src={client1} alt="client 1" />
            <p>Stories, Media 5min read</p>
            <h5 className="mt-3 mb-2 mt-0">
              Top Skills First - Year UX Designer Should Master
            </h5>
            <Button label="Read more" styleClass="rounded" border />
          </div>
          <div className="col-6 col-sm-6 col-lg-4">
            <img src={client1} alt="client 1" />
            <p>Stories, Media 5min read</p>
            <h5 className="mt-3 mb-2 mt-0">
              Top Skills First - Year UX Designer Should Master
            </h5>
            <Button label="Read more" styleClass="rounded" border />
          </div>
          <div className="col-6 col-sm-6 col-lg-4">
            <img src={client1} alt="client 1" />
            <p>Stories, Media 5min read</p>
            <h5 className="mt-3 mb-2 mt-0">
              Top Skills First - Year UX Designer Should Master
            </h5>
            <Button label="Read more" styleClass="rounded" border />
          </div>
          <div className="col-6 col-sm-6 col-lg-4">
            <img src={client1} alt="client 1" />
            <p>Stories, Media 5min read</p>
            <h5 className="mt-3 mb-2 mt-0">
              Top Skills First - Year UX Designer Should Master
            </h5>
            <Button label="Read more" styleClass="rounded" border />
          </div>
          <div className="col-6 col-sm-6 col-lg-4">
            <img src={client1} alt="client 1" />
            <p>Stories, Media 5min read</p>
            <h5 className="mt-3 mb-2 mt-0">
              Top Skills First - Year UX Designer Should Master
            </h5>
            <Button label="Read more" styleClass="rounded" border />
          </div>
          <div className="col-6 col-sm-6 col-lg-4">
            <img src={client1} alt="client 1" />
            <p>Stories, Media 5min read</p>
            <h5 className="mt-3 mb-2 mt-0">
              Top Skills First - Year UX Designer Should Master
            </h5>
            <Button label="Read more" styleClass="rounded" border />
          </div>
          <div className="col-6 col-sm-6 col-lg-4">
            <img src={client1} alt="client 1" />
            <p>Stories, Media 5min read</p>
            <h5 className="mt-3 mb-2 mt-0">
              Top Skills First - Year UX Designer Should Master
            </h5>
            <Button label="Read more" styleClass="rounded" border />
          </div>
          <div className="col-6 col-sm-6 col-lg-4">
            <img src={client1} alt="client 1" />
            <p>Stories, Media 5min read</p>
            <h5 className="mt-3 mb-2 mt-0">
              Top Skills First - Year UX Designer Should Master
            </h5>
            <Button label="Read more" styleClass="rounded" border />
          </div>
        </div>
      </div>
    </Posts.Wrapper>
  );
};

export default Posts;
Posts.Wrapper = styled.div`
  background: rgba(229, 229, 229, 0.3);
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 60px;
  .container {
    .row {
      .col-sm-6 {
        margin-bottom: 30px;
        img {
          width: 100%;
        }
        p {
          margin-bottom: 5px;
        }
        h5 {
          font-family: Mulish;
          font-style: normal;
          font-weight: 800;
          font-size: 24px;
          line-height: 30px;

          color: #000000;
        }
      }
    }
  }
  @media (max-width: 520px) {
    .container {
      .row {
        .col-sm-6 {
          p {
            margin-bottom: 2px;
            font-size: 14px;
          }
          h5 {
            font-family: Mulish;
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 20px;

            color: #000000;
          }
        }
      }
    }
  }
`;
