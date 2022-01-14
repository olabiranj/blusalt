import { Table, Tag, Avatar } from "antd";
import "antd/dist/antd.css";

import styled from "styled-components";
import arrowDown from "../../assets/icons/Arrow - Down Circle.svg";
import michealImg from "../../assets/images/team-2.png";
import chiomImg from "../../assets/images/marie.png";
import boluImg from "../../assets/images/kal-visuals-square.png";
import MiriamImg from "../../assets/images/ivana-square.png";

const TableContainer = () => {
  const columns = [
    {
      title: "Name/Email",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: any) => (
        <div className="user-info">
          <img src={record.img} alt="" />
          <div>
            <h5>{record.name}</h5>
            <h6>{record.email}</h6>
          </div>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      render: (tags: any) => (
        <Tag color={tags === "pending" ? "orange" : "success"} key={tags}>
          {tags}
        </Tag>
      ),
    },
    {
      title: "Date",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "",
      key: "action",
      render: (text: any, record: any) => <Avatar src={arrowDown} />,
    },
  ];

  const data = [
    {
      key: "1",
      name: "Michael Olu",
      age: "New Agent",
      tags: "pending",
      address: "23/04/18",
      email: "michael@mail.com",
      img: michealImg,
    },
    {
      key: "2",
      name: "Chioma James",
      age: "Account Deactivation",
      tags: "pending",
      address: "23/12/20",
      email: "alexa@mail.com",
      img: chiomImg,
    },
    {
      key: "3",
      name: "Boluwatife Ade",
      age: "New User",
      tags: "active",
      address: "13/04/19",
      email: "laure@mail.com",
      img: boluImg,
    },
    {
      key: "4",
      name: "Miriam Eric",
      age: "Email Auth",
      tags: "active",
      address: "03/04/21",
      email: "miriam@mail.com",
      img: MiriamImg,
    },
  ];

  return (
    <TableWrapper className="col-sm-9 col-md-9">
      <div className="inner">
        <h4>Recent Requests</h4>
        <Table columns={columns} dataSource={data} scroll={{ x: 500 }} />
      </div>
    </TableWrapper>
  );
};

export default TableContainer;

const TableWrapper = styled.div`
  padding: 15px;
  .inner {
    background: #ffffff;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    padding: 15px;
    h4 {
      font-size: 18px;
      line-height: 120%;
      letter-spacing: -0.4px;

      color: #171717;
    }
    .ant-table-thead > tr > th {
      position: relative;
      color: #8392ab;
      font-weight: 500;
      text-align: left;
      background: #ffffff;
      border-bottom: 1px solid #f0f0f0;
      transition: background 0.3s ease;
    }
    .ant-table-tbody > tr > td {
      border-bottom: 1px solid #f0f0f0;
      transition: background 0.3s;
      color: #8392ab;
    }
    .ant-tag {
      border-radius: 100px;
      width: 80px;
      text-align: center;
    }
    .user-info {
      display: flex;
      img {
        border-radius: 8px;
        height: 41px;
        width: 41px;
        margin-right: 10px;
      }
      div {
        h5 {
          font-size: 16px;
          letter-spacing: -0.442553px;

          color: #141414;
          margin: 0;
        }
        h6 {
          font-size: 14px;
          letter-spacing: -0.387234px;

          color: #8392ab;
        }
      }
    }
  }
  @media screen and (max-width: 590px) {
  }
`;
